import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const Data = createContext();

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://first-puff.onrender.com";

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  // Check login state on initial mount & fetch latest profile from backend
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem("first_puff_token");
      const savedUser = localStorage.getItem("first_puff_user");

      if (savedToken && savedUser) {
        const parsed = JSON.parse(savedUser);
        setUser(parsed);
        setRole(parsed.role || "player");
        setToken(savedToken);
        setIsLoggedIn(true);

        // Fetch fresh profile with synced totalStars & unlockedLevel
        axios
          .get(`${API_BASE_URL}/api/users/profile`, {
            headers: { Authorization: `Bearer ${savedToken}` },
          })
          .then((res) => {
            if (res.data?.user) {
              setUser(res.data.user);
              localStorage.setItem("first_puff_user", JSON.stringify(res.data.user));
            }
          })
          .catch(() => {
            // Keep cached user if offline or network unavailable
          });
      }
    } catch (e) {
      console.warn("Failed to parse saved user", e);
    } finally {
      setAuthChecked(true);
    }
  }, []);

  // Axios interceptor for Authorization header
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      (config) => {
        const currentToken = localStorage.getItem("first_puff_token");
        if (currentToken) {
          config.headers["Authorization"] = `Bearer ${currentToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => axios.interceptors.request.eject(interceptor);
  }, []);

  const login = (userData, authToken) => {
    localStorage.setItem("first_puff_user", JSON.stringify(userData));
    localStorage.setItem("first_puff_token", authToken);
    setUser(userData);
    setRole(userData.role || "player");
    setToken(authToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("first_puff_token");
    localStorage.removeItem("first_puff_user");
    localStorage.removeItem("first_puff_save");
    setUser(null);
    setRole(null);
    setToken(null);
    setIsLoggedIn(false);
  };

  // Update progress fields in current user profile
  const updateUserProgress = (progress) => {
    setUser((prev) => {
      if (!prev) return null;
      const starsObj = { ...(prev.stars || {}), ...(progress.stars || {}) };
      const totalStars =
        progress.totalStars !== undefined
          ? progress.totalStars
          : Object.values(starsObj).reduce((a, b) => a + (Number(b) || 0), 0);

      const updated = {
        ...prev,
        unlockedLevel: Math.max(prev.unlockedLevel || 1, progress.unlockedLevel || 1),
        totalStars,
        stars: starsObj,
        bestTimes: { ...(prev.bestTimes || {}), ...(progress.bestTimes || {}) },
      };
      localStorage.setItem("first_puff_user", JSON.stringify(updated));
      return updated;
    });
  };

  // Sync offline localStorage progress to the backend account ONLY if user is logged in
  const syncWithCloud = async (offlineSave) => {
    if (!token || !isLoggedIn) return null;
    try {
      const res = await axios.post(`${API_BASE_URL}/api/game/sync`, offlineSave);
      if (res.data) {
        updateUserProgress({
          unlockedLevel: res.data.unlockedLevel,
          totalStars: res.data.totalStars,
          stars: res.data.stars,
          bestTimes: res.data.bestTimes,
        });
      }
      return res.data;
    } catch (err) {
      console.error("Cloud sync failed (offline or network error):", err.message);
      return null;
    }
  };

  const value = {
    user,
    setUser,
    role,
    token,
    isLoggedIn,
    authChecked,
    login,
    logout,
    updateUserProgress,
    syncWithCloud,
    apiBaseUrl: API_BASE_URL,
  };

  return <Data.Provider value={value}>{children}</Data.Provider>;
};

export const useData = () => {
  const context = useContext(Data);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
