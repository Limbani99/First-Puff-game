import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { mergeProgress } from "../utils/progress";

export const Data = createContext();

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://first-puff.onrender.com";

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const clearSession = () => {
    localStorage.removeItem("first_puff_token");
    localStorage.removeItem("first_puff_user");
    setUser(null);
    setRole(null);
    setToken(null);
    setIsLoggedIn(false);
  };

  const setSession = (userData, authToken) => {
    if (!userData || typeof userData !== "object" || typeof authToken !== "string" || !authToken) {
      throw new Error("The server returned an invalid login response");
    }
    localStorage.setItem("first_puff_user", JSON.stringify(userData));
    localStorage.setItem("first_puff_token", authToken);
    setUser(userData);
    setRole(userData.role || "player");
    setToken(authToken);
    setIsLoggedIn(true);
  };

  // Restore a cached session only after checking that its token is still valid.
  useEffect(() => {
    let active = true;
    const restoreSession = async () => {
      try {
        const savedToken = localStorage.getItem("first_puff_token");
        const savedUser = localStorage.getItem("first_puff_user");

        if (!savedToken || !savedUser) {
          if (savedToken || savedUser) clearSession();
          return;
        }

        let cachedUser;
        try {
          cachedUser = JSON.parse(savedUser);
          if (!cachedUser || typeof cachedUser !== "object") {
            throw new Error("Saved user data is not an object");
          }
        } catch (error) {
          console.warn("Clearing invalid saved login data:", error);
          clearSession();
          return;
        }

        try {
          const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: { Authorization: `Bearer ${savedToken}` },
            timeout: 10000,
          });
          if (!data?.user) {
            throw new Error("The profile response did not contain a user");
          }
          if (active) setSession(data.user, savedToken);
        } catch (error) {
          if (error.response?.status === 401 || error.response?.status === 403) {
            if (active) clearSession();
          } else if (active) {
            setSession(cachedUser, savedToken);
          }
        }
      } finally {
        if (active) setAuthChecked(true);
      }
    };

    restoreSession().catch((error) => {
      console.error("Could not restore the saved login:", error);
      if (active) {
        clearSession();
        setAuthChecked(true);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  // Attach tokens to API calls and clear the session when a protected call rejects it.
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const currentToken = localStorage.getItem("first_puff_token");
        if (currentToken) {
          config.headers = config.headers || {};
          config.headers["Authorization"] = `Bearer ${currentToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const requestUrl = error.config?.url || "";
        if (
          error.response?.status === 401 &&
          !requestUrl.includes("/api/users/login")
        ) {
          clearSession();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  const login = setSession;

  const logout = () => {
    clearSession();
    localStorage.removeItem("first_puff_save");
  };

  // Update progress fields in current user profile
  const updateUserProgress = (progress) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = {
        ...prev,
        ...mergeProgress(prev, progress),
      };
      updated.totalStars = Object.values(updated.stars).reduce((sum, value) => sum + (Number(value) || 0), 0);
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
