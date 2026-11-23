import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundManager } from '../game/sound';
import { useData } from './DataProvider';

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
  const { user, token, isLoggedIn, updateUserProgress } = useData();

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

  // Save to localStorage on state changes (persists player progress on device for guests and logged-in users)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch {
      // Ignore quota errors
    }
  }, [gameState]);

  // Synchronize progress with logged-in user profile when logging in
  useEffect(() => {
    if (isLoggedIn && user) {
      setGameState((prev) => {
        const userStars = user.stars || {};
        const userTimes = user.bestTimes || {};
        const mergedUnlocked = Math.max(prev.unlockedLevel || 1, user.unlockedLevel || 1);
        const mergedStars = { ...(prev.stars || {}), ...userStars };
        const mergedTimes = { ...(prev.bestTimes || {}), ...userTimes };

        const updated = {
          ...prev,
          unlockedLevel: mergedUnlocked,
          stars: mergedStars,
          bestTimes: mergedTimes,
          settings: user.settings || prev.settings,
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch {}
        return updated;
      });
    }
  }, [isLoggedIn, user]);

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

    // Background cloud sync to user profile ONLY if user is logged in
    try {
      if (isLoggedIn && (token || localStorage.getItem('first_puff_token'))) {
        const currentToken = token || localStorage.getItem('first_puff_token');
        const apiUrl = import.meta.env.VITE_API_URL || "https://first-puff.onrender.com";
        fetch(`${apiUrl}/api/game/save`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentToken}`
          },
          body: JSON.stringify({
            levelId: numId,
            time: timeNum,
            bumps,
            stars: earnedStars
          })
        })
          .then((res) => res.json())
          .then((data) => {
            if (data && updateUserProgress) {
              updateUserProgress({
                unlockedLevel: data.unlockedLevel,
                totalStars: data.totalStars,
                stars: data.stars,
                bestTimes: data.bestTimes
              });
            }
          })
          .catch(() => {});
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

  const clearProgress = () => {
    const cleanState = {
      unlockedLevel: 1,
      stars: {},
      bestTimes: {},
      settings: {
        sound: true,
        vibration: true,
      },
    };
    setGameState(cleanState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const syncFromUser = (userData) => {
    if (!userData) return;
    setGameState((prev) => {
      const mergedUnlocked = Math.max(prev.unlockedLevel || 1, userData.unlockedLevel || 1);
      const mergedStars = { ...(prev.stars || {}), ...(userData.stars || {}) };
      const mergedTimes = { ...(prev.bestTimes || {}), ...(userData.bestTimes || {}) };
      const updated = {
        ...prev,
        unlockedLevel: mergedUnlocked,
        stars: mergedStars,
        bestTimes: mergedTimes,
        settings: userData.settings || prev.settings,
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  return (
    <GameContext.Provider
      value={{
        ...gameState,
        updateSettings,
        completeLevel,
        resetProgress,
        clearProgress,
        syncFromUser
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
