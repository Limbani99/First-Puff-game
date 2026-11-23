import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Grid, Settings as SettingsIcon, User as UserIcon } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { useData } from '../context/DataProvider';
import { soundManager } from '../game/sound';
import Raft from '../component/Raft';
import AnimalAvatar from '../component/AnimalAvatar';

export default function Home() {
  const navigate = useNavigate();
  const { unlockedLevel, stars } = useGame();
  const { isLoggedIn } = useData();

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
    <div className="relative w-full h-full flex flex-col justify-between items-center py-8 px-6 bg-gradient-to-b from-sky-400 via-sky-600 to-sky-900 select-none overflow-hidden no-scrollbar">
      {/* Decorative River Water Ripples in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full border-4 border-white animate-ping" />
        <div className="absolute top-2/3 right-1/4 w-40 h-40 rounded-full border-4 border-white animate-ping" />
      </div>

      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
          <span className="text-amber-400 text-lg">⭐</span>
          <span className="text-white font-black text-sm">{totalStars} / 150</span>
        </div>

        <div className="flex items-center gap-2">
          {!isLoggedIn ? (
            <button
              onClick={() => {
                soundManager.playClick();
                navigate('/login');
              }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:brightness-110 active:scale-95 text-slate-950 font-black text-xs flex items-center gap-1 shadow-md border border-white/30 transition-transform"
              aria-label="Log In"
            >
              <UserIcon size={14} />
              <span>LOG IN</span>
            </button>
          ) : (
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
          )}

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
      <div className="flex flex-col items-center my-auto z-10 scale-90 sm:scale-100 transition-transform">
        <div className="flex flex-col items-center mb-2 sm:mb-5">
          <h1 className="text-3xl sm:text-5xl font-black text-amber-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] tracking-wider uppercase font-sans text-center">
            Gujarati Banka Ho
          </h1>
          <p className="text-sky-100 font-bold text-xs sm:text-sm mt-0.5 drop-shadow text-center max-w-[280px]">
            Chaar Gujarati Bankas, ek raft, full power dhamaal!
          </p>
        </div>

        {/* Animated bobbing raft */}
        <div className="animate-bob cursor-pointer" onClick={() => soundManager.playPuff('hippo', 0.6)}>
          <Raft activeCrew={['hippo', 'frog', 'pig', 'penguin']} />
        </div>

        {/* Crew preview chips */}
        <div className="flex items-center gap-2.5 mt-3 sm:mt-5 bg-slate-900/50 backdrop-blur-sm px-4 py-1.5 rounded-2xl border border-white/10 shadow-lg">
          <button type="button" onClick={() => soundManager.playPuff('hippo', 0.6)} title="Devayat: Forward Propulsion" className="hover:scale-115 active:scale-95 transition-transform">
            <AnimalAvatar crew="hippo" size={28} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('frog', 0.6)} title="Aditya: Steer Right" className="hover:scale-115 active:scale-95 transition-transform">
            <AnimalAvatar crew="frog" size={28} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('pig', 0.6)} title="Gaman: Steer Left" className="hover:scale-115 active:scale-95 transition-transform">
            <AnimalAvatar crew="pig" size={28} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('penguin', 0.6)} title="Darshan: Brake Shield" className="hover:scale-115 active:scale-95 transition-transform">
            <AnimalAvatar crew="penguin" size={28} />
          </button>
        </div>
      </div>

      {/* Bottom Main Action Buttons (Positioned with safe clearance above mobile system navigation bar) */}
      <div
        className="w-full flex flex-col gap-2.5 max-w-[280px] z-10"
        style={{ paddingBottom: 'max(2.5rem, calc(env(safe-area-inset-bottom, 0px) + 2rem))' }}
      >
        <button
          onClick={handlePlay}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 active:scale-95 text-white font-black text-lg sm:text-xl shadow-xl border-2 border-white/60 flex items-center justify-center gap-3 transition-transform"
        >
          <Play fill="white" size={22} />
          {unlockedLevel === 1 ? 'START ADVENTURE' : unlockedLevel > 50 ? 'ALL 50 LEVELS CLEARED! 🏆' : `PLAY LEVEL ${unlockedLevel}`}
        </button>

        <button
          onClick={handleLevels}
          className="w-full py-3 px-6 rounded-2xl bg-sky-800/80 hover:bg-sky-700/80 active:scale-95 text-white font-extrabold text-sm sm:text-base shadow-lg border border-white/20 flex items-center justify-center gap-2 transition-transform"
        >
          <Grid size={18} />
          SELECT LEVEL
        </button>
      </div>
    </div>
  );
}
