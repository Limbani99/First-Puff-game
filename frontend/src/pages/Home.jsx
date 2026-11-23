import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Grid, Settings as SettingsIcon, User as UserIcon } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { soundManager } from '../game/sound';
import Raft from '../component/Raft';

export default function Home() {
  const navigate = useNavigate();
  const { unlockedLevel, stars } = useGame();

  // Count total stars
  const totalStars = Object.values(stars).reduce((acc, curr) => acc + (curr || 0), 0);

  const handlePlay = () => {
    soundManager.playClick();
    navigate(`/play/${unlockedLevel}`);
  };

  const handleLevels = () => {
    soundManager.playClick();
    navigate('/levels');
  };

  const handleSettings = () => {
    soundManager.playClick();
    navigate('/settings');
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center py-8 px-6 bg-gradient-to-b from-sky-400 via-sky-600 to-sky-900 select-none overflow-hidden">
      {/* Decorative River Water Ripples in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full border-4 border-white animate-ping" />
        <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full border-4 border-white animate-ping" />
      </div>

      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
          <span className="text-amber-400 text-lg">⭐</span>
          <span className="text-white font-black text-sm">{totalStars} / 30</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundManager.playClick();
              navigate('/profile');
            }}
            className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-800 active:scale-95 text-white flex items-center justify-center border border-white/20 shadow-lg transition-transform"
            aria-label="Profile and Online Sync"
          >
            <UserIcon size={20} />
          </button>

          <button
            onClick={handleSettings}
            className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-800 active:scale-95 text-white flex items-center justify-center border border-white/20 shadow-lg transition-transform"
            aria-label="Settings"
          >
            <SettingsIcon size={20} />
          </button>
        </div>
      </div>

      {/* Hero Title & Bobbing Raft */}
      <div className="flex flex-col items-center my-auto z-10">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-black text-amber-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] tracking-wider uppercase font-sans">
            First Puff
          </h1>
          <p className="text-sky-100 font-bold text-xs sm:text-sm mt-1 drop-shadow text-center max-w-[280px]">
            Four silly animal friends, one raft, infinite gas power!
          </p>
        </div>

        {/* Animated bobbing raft */}
        <div className="animate-bob cursor-pointer" onClick={() => soundManager.playPuff('hippo', 0.6)}>
          <Raft activeCrew={['hippo', 'frog', 'pig', 'penguin']} />
        </div>

        {/* Crew preview chips */}
        <div className="flex items-center gap-2 mt-6 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/10">
          <span className="text-2xl" title="Hippo: Forward">🦛</span>
          <span className="text-2xl" title="Frog: Right">🐸</span>
          <span className="text-2xl" title="Pig: Left">🐷</span>
          <span className="text-2xl" title="Penguin: Brake">🐧</span>
        </div>
      </div>

      {/* Bottom Main Action Buttons */}
      <div className="w-full flex flex-col gap-3 max-w-[280px] z-10">
        <button
          onClick={handlePlay}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 active:scale-95 text-white font-black text-xl shadow-xl border-2 border-white/60 flex items-center justify-center gap-3 transition-transform"
        >
          <Play fill="white" size={24} />
          {unlockedLevel === 1 ? 'START ADVENTURE' : `PLAY LEVEL ${unlockedLevel}`}
        </button>

        <button
          onClick={handleLevels}
          className="w-full py-3.5 px-6 rounded-2xl bg-sky-800/80 hover:bg-sky-700/80 active:scale-95 text-white font-extrabold text-base shadow-lg border border-white/20 flex items-center justify-center gap-2 transition-transform"
        >
          <Grid size={18} />
          SELECT LEVEL
        </button>
      </div>
    </div>
  );
}
