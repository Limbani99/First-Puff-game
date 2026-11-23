import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { useData } from "../context/DataProvider";
import { soundManager } from "../game/sound";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, apiBaseUrl } = useData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundManager.playClick();
    setLoading(true);

    try {
      // Get current local progress so it immediately syncs into MongoDB on login
      let gameSave = null;
      try {
        const raw = localStorage.getItem("first_puff_save");
        if (raw) gameSave = JSON.parse(raw);
      } catch {}

      const { data } = await axios.post(`${apiBaseUrl}/api/users/login`, {
        ...form,
        gameSave,
      });

      login(data.user, data.token);

      // Merge backend progress into local save
      if (data.user) {
        try {
          const localSave = JSON.parse(localStorage.getItem("first_puff_save") || "{}");
          const mergedUnlocked = Math.max(localSave.unlockedLevel || 1, data.user.unlockedLevel || 1);
          const mergedStars = { ...(localSave.stars || {}), ...(data.user.stars || {}) };
          const mergedTimes = { ...(localSave.bestTimes || {}), ...(data.user.bestTimes || {}) };

          localStorage.setItem("first_puff_save", JSON.stringify({
            ...localSave,
            unlockedLevel: mergedUnlocked,
            stars: mergedStars,
            bestTimes: mergedTimes,
            settings: data.user.settings || localSave.settings || { sound: true, vibration: true }
          }));
        } catch {}
      }

      toast.success(data.message || "Logged in & data saved to DB 🎉");
      soundManager.playWin();
      navigate("/home");
    } catch (err) {
      soundManager.playBump();
      toast.error(err.response?.data?.message || "Login failed. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center py-6 px-5 bg-gradient-to-b from-sky-500 via-sky-700 to-sky-950 text-white select-none overflow-y-auto">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between z-10 mb-2">
        <button
          onClick={() => {
            soundManager.playClick();
            navigate("/home");
          }}
          className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-800 active:scale-95 text-white flex items-center justify-center border border-white/20 transition-transform"
          aria-label="Back to Game"
        >
          <ArrowLeft size={20} />
        </button>

        <span className="text-xs font-black bg-amber-400 text-sky-950 px-3 py-1 rounded-full uppercase tracking-wider">
          Online Account
        </span>
      </div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm my-auto bg-slate-900/85 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl z-10"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-3xl shadow-lg border-2 border-white/40">
            🦛
          </div>
          <h2 className="text-2xl font-black text-amber-300 uppercase tracking-wide">
            Player Login
          </h2>
          <p className="text-xs text-sky-200 mt-1">
            Sign in to sync your high scores and unlocked stars across devices!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 text-sky-400" size={18} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="captain@river.com"
                required
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 text-sky-400" size={18} />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>
          </div>

          <div className="text-right">
            <Link
              to="/forget-password"
              className="text-xs text-amber-300 hover:text-amber-200 font-bold hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 active:scale-95 text-sky-950 font-black text-base shadow-lg border border-amber-300/80 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "LOG IN & PLAY"}
          </button>
        </form>

        <div className="mt-5 text-center text-xs text-sky-200 border-t border-white/10 pt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-amber-300 font-extrabold hover:underline ml-1"
          >
            Create Player Profile
          </Link>
        </div>
      </motion.div>

      {/* Offline Guest Option */}
      <div className="w-full text-center mt-3 z-10">
        <button
          onClick={() => {
            soundManager.playClick();
            navigate("/home");
          }}
          className="text-xs font-bold text-sky-200/80 hover:text-white underline"
        >
          Skip & Play Offline (No login required)
        </button>
      </div>
    </div>
  );
}
