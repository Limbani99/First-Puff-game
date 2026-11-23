import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ArrowLeft, Lock, Mail, User as UserIcon } from "lucide-react";
import { useData } from "../context/DataProvider";
import { useGame } from "../context/GameContext";
import { soundManager } from "../game/sound";
import AnimalAvatar from "../component/AnimalAvatar";

const CREW_CHOICES = [
  { id: "hippo", emoji: "🦛", name: "Hippo", role: "Forward Engine" },
  { id: "frog", emoji: "🐸", name: "Frog", role: "Right Jet" },
  { id: "pig", emoji: "🐷", name: "Pig", role: "Left Jet" },
  { id: "penguin", emoji: "🐧", name: "Penguin", role: "Brake Shield" },
];

export default function Register() {
  const navigate = useNavigate();
  const { login, apiBaseUrl } = useData();
  const { syncFromUser } = useGame();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "hippo",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectAvatar = (avatarId) => {
    soundManager.playPuff(avatarId, 0.6);
    setForm((prev) => ({ ...prev, avatar: avatarId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    soundManager.playClick();
    setLoading(true);

    try {
      let gameSave = null;
      try {
        const raw = localStorage.getItem("first_puff_save");
        if (raw) gameSave = JSON.parse(raw);
      } catch {}

      const { data } = await axios.post(`${apiBaseUrl}/api/users/register`, {
        ...form,
        gameSave,
      });

      if (data.token && data.user) {
        login(data.user, data.token);
        syncFromUser(data.user);
      }
      toast.success(data.message || "Registration Successful 🎉");
      soundManager.playWin();
      navigate("/home");
    } catch (err) {
      soundManager.playBump();
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center py-6 px-5 bg-gradient-to-b from-sky-500 via-sky-700 to-sky-950 text-white select-none overflow-y-auto no-scrollbar">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between z-10 mb-2">
        <button
          onClick={() => {
            soundManager.playClick();
            navigate("/login");
          }}
          className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-800 active:scale-95 text-white flex items-center justify-center border border-white/20 transition-transform"
          aria-label="Back to Login"
        >
          <ArrowLeft size={20} />
        </button>

        <span className="text-xs font-black bg-emerald-400 text-sky-950 px-3 py-1 rounded-full uppercase tracking-wider">
          New Player
        </span>
      </div>

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm my-auto bg-slate-900/85 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl z-10"
      >
        <div className="text-center mb-5">
          <h2 className="text-2xl font-black text-amber-300 uppercase tracking-wide">
            Join The Crew
          </h2>
          <p className="text-xs text-sky-200 mt-1">
            Pick your mascot and save your gas-powered river records!
          </p>
        </div>

        {/* Mascot Selection */}
        <div className="mb-4">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-2 text-center">
            Choose Your Captain Mascot
          </label>
          <div className="grid grid-cols-4 gap-2">
            {CREW_CHOICES.map((crew) => {
              const isSelected = form.avatar === crew.id;
              return (
                <button
                  type="button"
                  key={crew.id}
                  onClick={() => handleSelectAvatar(crew.id)}
                  className={`p-2 rounded-2xl flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? "bg-amber-400 text-sky-950 scale-105 border-2 border-white shadow-lg"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-white/10"
                  }`}
                >
                  <AnimalAvatar crew={crew.id} size={32} />
                  <span className="text-[10px] font-black mt-1 uppercase">{crew.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-1">
              Player Username
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3.5 top-3 text-sky-400" size={18} />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="RiverCaptain99"
                required
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

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
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                placeholder="At least 6 characters"
                required
                minLength={6}
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 active:scale-95 text-white font-black text-base shadow-lg border border-emerald-300 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
          >
            {loading ? "Creating..." : "REGISTER & PLAY"}
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-sky-200 border-t border-white/10 pt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-300 font-extrabold hover:underline ml-1">
            Sign in
          </Link>
        </div>
      </motion.div>

      {/* Offline Guest Option */}
      <div 
        className="w-full text-center mt-2 z-10"
        style={{ paddingBottom: 'max(3.5rem, calc(env(safe-area-inset-bottom, 0px) + 2.5rem))' }}
      >
        <button
          onClick={() => {
            soundManager.playClick();
            navigate("/home");
          }}
          className="text-xs font-bold text-sky-200/80 hover:text-white underline"
        >
          Play Offline as Guest
        </button>
      </div>
    </div>
  );
}
