import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { soundManager } from '../game/sound';
import { useData } from './DataProvider';
import { mergeProgress } from '../utils/progress';

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
        const updated = {
          ...prev,
          ...mergeProgress(prev, user),
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
        numId >= prev.unlockedLevel && numId < 50
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
        const targetUnlocked = numId < 50 ? numId + 1 : 50;
        axios.post(`${apiUrl}/api/game/save`, {
          levelId: numId,
          time: timeNum,
          bumps,
          stars: earnedStars,
          unlockedLevel: targetUnlocked
        }, {
          headers: { Authorization: `Bearer ${currentToken}` }
        })
          .then(({ data }) => {
            if (data && data.unlockedLevel && updateUserProgress) {
              updateUserProgress({
                unlockedLevel: data.unlockedLevel,
                totalStars: data.totalStars,
                stars: data.stars,
                bestTimes: data.bestTimes
              });
            }
          })
          .catch((err) => {
            console.warn("Cloud save failed:", err.message);
          });
      }
    } catch (err) {
      console.warn("Could not start cloud save:", err.message);
    }

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
      const updated = {
        ...prev,
        ...mergeProgress(prev, userData),
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
