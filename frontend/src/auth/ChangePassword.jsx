import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ArrowLeft, Lock } from "lucide-react";
import { useData } from "../context/DataProvider";
import { soundManager } from "../game/sound";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { apiBaseUrl } = useData();

  const [form, setForm] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      toast.error("New passwords do not match");
      soundManager.playBump();
      return;
    }

    soundManager.playClick();
    setLoading(true);

    try {
      const { data } = await axios.post(`${apiBaseUrl}/api/users/change-password`, {
        oldPassword: form.oldPassword,
        newPassword: form.newPassword,
      });
      toast.success(data.message || "Password changed successfully!");
      soundManager.playWin();
      navigate("/profile");
    } catch (err) {
      soundManager.playBump();
      toast.error(err.response?.data?.message || "Failed to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center py-6 px-5 bg-gradient-to-b from-sky-500 via-sky-700 to-sky-950 text-white select-none overflow-y-auto">
      <div className="w-full flex items-center justify-between z-10 mb-2">
        <button
          onClick={() => {
            soundManager.playClick();
            navigate(-1);
          }}
          className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-800 active:scale-95 text-white flex items-center justify-center border border-white/20 transition-transform"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>

        <span className="text-xs font-black bg-amber-400 text-sky-950 px-3 py-1 rounded-full uppercase tracking-wider">
          Security
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm my-auto bg-slate-900/85 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl z-10"
      >
        <div className="text-center mb-5">
          <h2 className="text-2xl font-black text-amber-300 uppercase tracking-wide">
            Change Password
          </h2>
          <p className="text-xs text-sky-200 mt-1">
            Update your account password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-1">
              Current Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 text-sky-400" size={18} />
              <input
                type="password"
                name="oldPassword"
                value={form.oldPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-1">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 text-sky-400" size={18} />
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 text-sky-400" size={18} />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800 border border-sky-600/50 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 active:scale-95 text-sky-950 font-black text-base shadow-lg border border-amber-300 transition-all flex items-center justify-center disabled:opacity-50"
          >
            {loading ? "Updating..." : "UPDATE PASSWORD"}
          </button>
        </form>
      </motion.div>

      <div className="w-10 h-6" />
    </div>
  );
}
