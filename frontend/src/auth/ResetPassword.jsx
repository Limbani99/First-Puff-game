import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ArrowLeft, Lock } from "lucide-react";
import { useData } from "../context/DataProvider";
import { soundManager } from "../game/sound";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { apiBaseUrl } = useData();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      soundManager.playBump();
      return;
    }

    soundManager.playClick();
    setLoading(true);

    try {
      const { data } = await axios.post(`${apiBaseUrl}/api/users/reset-password/${token}`, {
        password,
      });
      toast.success(data.message || "Password updated successfully 🎉");
      soundManager.playWin();
      navigate("/login");
    } catch (err) {
      soundManager.playBump();
      toast.error(err.response?.data?.message || "Reset failed. The token may be expired.");
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
            navigate("/login");
          }}
          className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-800 active:scale-95 text-white flex items-center justify-center border border-white/20 transition-transform"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>

        <span className="text-xs font-black bg-amber-400 text-sky-950 px-3 py-1 rounded-full uppercase tracking-wider">
          New Password
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm my-auto bg-slate-900/85 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl z-10"
      >
        <div className="text-center mb-5">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center text-3xl border border-amber-400/40">
            🔐
          </div>
          <h2 className="text-2xl font-black text-amber-300 uppercase tracking-wide">
            Reset Password
          </h2>
          <p className="text-xs text-sky-200 mt-1">
            Choose a strong new password for your captain profile.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-sky-200 mb-1">
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 text-sky-400" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            {loading ? "Updating..." : "SET NEW PASSWORD"}
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-sky-200 border-t border-white/10 pt-3">
          Back to{" "}
          <Link to="/login" className="text-amber-300 font-extrabold hover:underline ml-1">
            Log in
          </Link>
        </div>
      </motion.div>

      <div className="w-10 h-6" />
    </div>
  );
}
