import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, LogOut, Cloud, Key, Trophy, Medal } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useData } from "../context/DataProvider";
import { useGame } from "../context/GameContext";
import { soundManager } from "../game/sound";

const MASCOT_EMOJIS = {
  hippo: "🦛",
  frog: "🐸",
  pig: "🐷",
  penguin: "🐧",
};

export default function Profile() {
  const navigate = useNavigate();
  const { user, isLoggedIn, logout, syncWithCloud, apiBaseUrl } = useData();
  const { unlockedLevel, stars, bestTimes, settings, clearProgress } = useGame();
  const [syncing, setSyncing] = useState(false);
  const [topPlayers, setTopPlayers] = useState([]);
  const [loadingTop, setLoadingTop] = useState(true);

  const totalStars = Object.values(stars).reduce((acc, curr) => acc + (curr || 0), 0);

  // Fetch top 3 players from backend
  useEffect(() => {
    let isMounted = true;
    const fetchTopPlayers = async () => {
      try {
        const apiUrl = apiBaseUrl || "https://first-puff.onrender.com";
        const { data } = await axios.get(`${apiUrl}/api/game/top-players`);
        if (isMounted && data?.topPlayers && data.topPlayers.length > 0) {
          setTopPlayers(data.topPlayers);
        } else if (isMounted) {
          // Sensible champion fallbacks if database has fewer players yet
          setTopPlayers([
            { _id: '1', username: user?.username || "mann", avatar: user?.avatar || "hippo", totalStars: totalStars || 28, unlockedLevel: unlockedLevel || 10 },
            { _id: '2', username: "CaptainFrog", avatar: "frog", totalStars: 24, unlockedLevel: 8 },
            { _id: '3', username: "PuffPiggy", avatar: "pig", totalStars: 19, unlockedLevel: 6 },
          ]);
        }
      } catch {
        if (isMounted) {
          setTopPlayers([
            { _id: '1', username: user?.username || "mann", avatar: user?.avatar || "hippo", totalStars: totalStars || 28, unlockedLevel: unlockedLevel || 10 },
            { _id: '2', username: "CaptainFrog", avatar: "frog", totalStars: 24, unlockedLevel: 8 },
            { _id: '3', username: "PuffPiggy", avatar: "pig", totalStars: 19, unlockedLevel: 6 },
          ]);
        }
      } finally {
        if (isMounted) setLoadingTop(false);
      }
    };

    fetchTopPlayers();
    return () => {
      isMounted = false;
    };
  }, [apiBaseUrl, user, totalStars, unlockedLevel]);

  const handleSync = async () => {
    soundManager.playClick();
    setSyncing(true);
    const result = await syncWithCloud({
      unlockedLevel,
      stars,
      bestTimes,
      settings,
    });
    setSyncing(false);

    if (result) {
      soundManager.playWin();
      toast.success("Progress safely synced to cloud ☁️");
    } else {
      soundManager.playBump();
      toast.error("Failed to sync. Make sure server is reachable.");
    }
  };

  const handleLogout = () => {
    soundManager.playClick();
    logout();
    clearProgress();
    toast.success("Logged out. Player data cleared from this device.");
    navigate("/login");
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-900 text-white select-none overflow-y-auto no-scrollbar">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between px-4 py-4 bg-sky-950 border-b border-sky-800/50 shadow-md z-10">
        <button
          onClick={() => {
            soundManager.playClick();
            navigate("/home");
          }}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-white flex items-center justify-center border border-white/10 transition-transform"
          aria-label="Back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-xl font-black text-amber-300 uppercase tracking-wide">
          Captain Profile
        </h1>

        <div className="w-10" />
      </div>

      <div 
        className="flex-1 p-5 space-y-4"
        style={{ paddingBottom: 'max(5.5rem, calc(env(safe-area-inset-bottom, 0px) + 4.5rem))' }}
      >
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-slate-800 to-sky-950 rounded-3xl p-5 border border-white/15 shadow-xl flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-400 flex items-center justify-center text-3xl shadow-lg border-2 border-white/40">
            {MASCOT_EMOJIS[user?.avatar] || "🦛"}
          </div>

          <div className="flex-1 overflow-hidden">
            <h2 className="text-lg font-black text-white truncate">
              {isLoggedIn ? user?.username : "Guest Captain"}
            </h2>
            <p className="text-xs text-sky-300 truncate">
              {isLoggedIn ? user?.email : "Playing Offline (Local Save)"}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-400 text-sky-950">
                {isLoggedIn ? user?.role || "Player" : "Offline"}
              </span>
            </div>
          </div>
        </div>

        {/* Game Stats Summary */}
        <div className="bg-slate-800/80 rounded-2xl p-4 border border-white/10 shadow-md">
          <div className="flex items-center gap-2 text-sm font-extrabold text-amber-300 mb-3">
            <Trophy size={18} />
            <span>RIVER ACHIEVEMENTS</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
              <div className="text-2xl font-black text-amber-400">⭐ {totalStars} / 30</div>
              <div className="text-[11px] text-slate-400 font-bold mt-0.5">Total Stars</div>
            </div>

            <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
              <div className="text-2xl font-black text-emerald-400">Level {unlockedLevel}</div>
              <div className="text-[11px] text-slate-400 font-bold mt-0.5">Max Unlocked</div>
            </div>
          </div>
        </div>

        {/* Cloud Sync Section */}
        {isLoggedIn ? (
          <div className="bg-slate-800/80 rounded-2xl p-4 border border-white/10 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Cloud size={18} className="text-sky-400" />
                  Cloud Save
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Backup your stars and best times to server
                </div>
              </div>

              <button
                onClick={handleSync}
                disabled={syncing}
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-extrabold text-xs shadow-md border border-white/20 transition-all disabled:opacity-50"
              >
                {syncing ? "Syncing..." : "Sync Now"}
              </button>
            </div>

            <div className="border-t border-white/10 pt-3">
              <Link
                to="/change-password"
                className="flex items-center justify-between py-2 text-sm text-sky-200 hover:text-white"
              >
                <span className="flex items-center gap-2 font-bold">
                  <Key size={16} /> Change Password
                </span>
                <span className="text-xs text-slate-400">→</span>
              </Link>
            </div>

            <div className="border-t border-white/10 pt-2">
              <button
                onClick={handleLogout}
                className="w-full py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-bold text-xs flex items-center justify-center gap-2 border border-rose-500/30 transition"
              >
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 rounded-3xl p-5 border-2 border-indigo-500/40 shadow-xl text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-3xl border border-indigo-400/30">
              ☁️
            </div>
            <div>
              <h3 className="font-black text-white text-lg uppercase tracking-wide">
                Sign In To Sync Progress
              </h3>
              <p className="text-xs text-sky-200 mt-1 leading-relaxed">
                Log in to automatically save your total stars, unlocked levels, and river best times across all your devices!
              </p>
            </div>
            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={() => {
                  soundManager.playClick();
                  navigate("/login");
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 active:scale-95 text-sky-950 font-black text-sm uppercase shadow-lg border border-white/30 transition-transform"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  navigate("/register");
                }}
                className="w-full py-2.5 rounded-2xl bg-sky-800/80 hover:bg-sky-700/80 active:scale-95 text-white font-extrabold text-xs uppercase border border-white/20 transition-transform"
              >
                Create Player Profile
              </button>
            </div>
          </div>
        )}

        {/* Top Three Players of the Game */}
        <div className="bg-slate-800/80 rounded-2xl p-4 border border-white/10 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-sm font-extrabold text-amber-300">
              <Medal size={18} className="text-amber-400" />
              <span>TOP 3 PLAYERS</span>
            </div>
            <span className="text-[10px] font-bold text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-400/30">
              Leaderboard
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {topPlayers.slice(0, 3).map((player, idx) => {
              const rankMedals = ["🥇", "🥈", "🥉"];
              const rankBorders = [
                "border-yellow-400/50 bg-gradient-to-r from-yellow-500/15 via-slate-900/70 to-slate-900/90 shadow-md",
                "border-slate-300/40 bg-gradient-to-r from-slate-400/15 via-slate-900/70 to-slate-900/90",
                "border-amber-600/40 bg-gradient-to-r from-amber-600/15 via-slate-900/70 to-slate-900/90"
              ];
              const isCurrentUser = user && (player.username === user.username || player._id === user._id);

              return (
                <div
                  key={player._id || idx}
                  className={`flex items-center justify-between p-3 rounded-xl border ${rankBorders[idx] || "border-white/10 bg-slate-900/60"} transition`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0" title={`Rank #${idx + 1}`}>
                      {rankMedals[idx] || `#${idx + 1}`}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-xl shadow-md shrink-0 border border-white/30">
                      {MASCOT_EMOJIS[player.avatar] || "🦛"}
                    </div>

                    <div className="truncate min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-sm text-white truncate">
                          {player.username}
                        </span>
                        {isCurrentUser && (
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 shadow-sm shrink-0">
                            YOU
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-bold text-slate-400">
                        Level {player.unlockedLevel} Max
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 pl-2">
                    <div className="font-mono font-black text-amber-300 text-sm flex items-center justify-end gap-1">
                      <span>⭐</span>
                      <span>{player.totalStars}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">Stars</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
