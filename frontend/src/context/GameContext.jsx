import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundManager } from '../game/sound';

const STORAGE_KEY = 'first_puff_save';

const defaultState = {
  unlockedLevel: 1,
  stars: {},
  bestTimes: {},
  settings: {
    sound: true,
    vibration: true
  }
};

export const GameContext = createContext(null);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export default function GameProvider({ children }) {
  const [gameState, setGameState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          unlockedLevel: parsed.unlockedLevel || 1,
          stars: parsed.stars || {},
          bestTimes: parsed.bestTimes || {},
          settings: {
            sound: parsed.settings?.sound ?? true,
            vibration: parsed.settings?.vibration ?? true
          }
        };
      }
    } catch {
      // Fallback on JSON parse error
    }
    return defaultState;
  });

  // Sync settings with soundManager
  useEffect(() => {
    soundManager.setMuted(!gameState.settings.sound);
    soundManager.setVibration(gameState.settings.vibration);
  }, [gameState.settings]);

  // Save to localStorage on state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch {
      // Ignore quota errors
    }
  }, [gameState]);

  const updateSettings = (newSettings) => {
    setGameState((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...newSettings
      }
    }));
  };

  const completeLevel = (levelId, time, bumps, targetTime) => {
    const numId = Number(levelId);
    let earnedStars = 1; // Always at least 1 star for reaching finish

    const timeNum = Number(time);
    if (timeNum <= targetTime) {
      earnedStars = 2;
      if (bumps <= 2) {
        earnedStars = 3;
      }
    }

    setGameState((prev) => {
      const currentStars = prev.stars[numId] || 0;
      const bestStars = Math.max(currentStars, earnedStars);

      const currentBestTime = prev.bestTimes[numId];
      const newBestTime =
        currentBestTime !== undefined
          ? Math.min(currentBestTime, Number(timeNum.toFixed(1)))
          : Number(timeNum.toFixed(1));

      const nextUnlocked =
        numId >= prev.unlockedLevel && numId < 10
          ? numId + 1
          : prev.unlockedLevel;

      return {
        ...prev,
        unlockedLevel: Math.max(prev.unlockedLevel, nextUnlocked),
        stars: {
          ...prev.stars,
          [numId]: bestStars
        },
        bestTimes: {
          ...prev.bestTimes,
          [numId]: newBestTime
        }
      };
    });

    // Background cloud sync if online player account is active
    try {
      const token = localStorage.getItem('first_puff_token');
      if (token) {
        fetch('http://localhost:5000/api/game/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            levelId: numId,
            time: timeNum,
            bumps,
            stars: earnedStars
          })
        }).catch(() => {});
      }
    } catch {}

    return earnedStars;
  };

  const resetProgress = () => {
    const resetState = {
      unlockedLevel: 1,
      stars: {},
      bestTimes: {},
      settings: gameState.settings
    };
    setGameState(resetState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resetState));
    } catch {
      // Ignore
    }
  };

  return (
    <GameContext.Provider
      value={{
        ...gameState,
        updateSettings,
        completeLevel,
        resetProgress
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
