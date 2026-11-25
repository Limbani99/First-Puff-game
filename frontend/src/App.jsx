import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import GameProvider from "./context/GameContext";
import { DataProvider } from "./context/DataProvider";
import MobileLayout from "./layout/MobileLayout";

// Main Game Pages (Offline-first)
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import LevelSelect from "./pages/LevelSelect";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

// Auth Pages (Career-Bridge style structure, reserved for online accounts)
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import ChangePassword from "./auth/ChangePassword";
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  return (
    <DataProvider>
      <GameProvider>
        <HashRouter>
          <MobileLayout>
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 2500,
                style: {
                  background: "#0f172a",
                  color: "#fff",
                  borderRadius: "16px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  border: "1px solid rgba(255,255,255,0.15)",
                },
              }}
            />
            <Routes>
              {/* Primary Game Routes */}
              <Route path="/" element={<Splash />} />
              <Route path="/home" element={<Home />} />
              <Route path="/levels" element={<LevelSelect />} />
              <Route path="/play/:id" element={<Game />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />

              {/* Online Auth & Account Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route
                path="/change-password"
                element={
                  <PrivateRoute>
                    <ChangePassword />
                  </PrivateRoute>
                }
              />
            </Routes>
          </MobileLayout>
        </HashRouter>
      </GameProvider>
    </DataProvider>
  );
}
