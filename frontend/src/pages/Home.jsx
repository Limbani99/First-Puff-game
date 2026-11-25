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
    <div className="relative w-full h-full flex flex-col items-center px-6 pt-5 pb-5 text-white bg-[radial-gradient(ellipse_at_50%_38%,rgba(14,165,233,0.56),transparent_58%),linear-gradient(160deg,#082f49_0%,#075985_48%,#082f49_100%)] select-none overflow-hidden no-scrollbar">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-20 w-64 h-64 rounded-full border border-white/10" />
        <div className="absolute -top-16 -right-12 w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute top-[38%] -left-20 w-44 h-44 rounded-full border border-white/10" />
        <div className="absolute bottom-28 right-[-5rem] w-64 h-64 rounded-full border border-white/10" />
      </div>

      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2 bg-slate-950/35 px-3.5 py-2 rounded-2xl border border-white/15 shadow-lg">
          <span className="w-8 h-8 rounded-xl bg-amber-300/15 flex items-center justify-center text-amber-300 text-lg">⭐</span>
          <div className="leading-tight">
            <span className="block text-white/55 text-[9px] font-black uppercase tracking-[0.16em]">Your score</span>
            <span className="text-white font-black text-sm">{totalStars}<span className="text-white/45"> / 150</span></span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isLoggedIn ? (
            <button
              onClick={() => {
                soundManager.playClick();
                navigate('/login');
              }}
              className="px-3.5 py-2 rounded-2xl bg-white/10 hover:bg-white/15 active:scale-95 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md border border-white/15 transition-all"
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
              className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center border border-white/15 shadow-lg transition-all"
              aria-label="Profile and Online Sync"
            >
              <UserIcon size={20} />
            </button>
          )}

          <button
            onClick={handleSettings}
            className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/15 active:scale-95 text-white flex items-center justify-center border border-white/15 shadow-lg transition-all"
            aria-label="Settings"
          >
            <SettingsIcon size={20} />
          </button>
        </div>
      </div>

      {/* Hero Title & Bobbing Raft */}
      <div className="flex flex-col items-center justify-center my-auto z-10 w-full">
        <div className="flex flex-col items-center mb-3 sm:mb-5">
          <span className="mb-2 rounded-full border border-cyan-100/20 bg-slate-950/25 px-3 py-1 text-[9px] font-black uppercase tracking-[0.24em] text-cyan-100/80">A Gujarati river adventure</span>
          <h1 className="text-[2rem] leading-[0.96] sm:text-5xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.38)] tracking-tight uppercase font-sans text-center">
            Gujarati Banka Ho
          </h1>
          <p className="text-cyan-50/75 font-semibold text-xs sm:text-sm mt-2 text-center max-w-[280px]">
            Four bankas. One raft. Full-power dhamaal.
          </p>
        </div>

        {/* Animated bobbing raft */}
        <div className="relative flex items-center justify-center w-full min-h-[190px] my-1">
          <div className="absolute w-56 h-40 rounded-full bg-cyan-300/10 blur-2xl" />
          <div className="absolute bottom-4 w-48 h-9 rounded-full border border-cyan-100/20 bg-cyan-100/5" />
          <div className="relative animate-bob cursor-pointer drop-shadow-[0_22px_22px_rgba(2,12,27,0.4)]" onClick={() => soundManager.playPuff('hippo', 0.6)}>
            <Raft activeCrew={['hippo', 'frog', 'pig', 'penguin']} />
          </div>
        </div>

        {/* Crew preview chips */}
        <div className="flex items-center gap-3 mt-2 bg-slate-950/25 px-4 py-2 rounded-2xl border border-white/10 shadow-lg">
          <span className="text-[9px] font-black uppercase tracking-[0.16em] text-cyan-50/50">Crew</span>
          <span className="h-6 w-px bg-white/10" />
          <button type="button" onClick={() => soundManager.playPuff('hippo', 0.6)} title="Devayat: Forward Propulsion" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="hippo" size={28} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('frog', 0.6)} title="Aditya: Steer Right" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="frog" size={28} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('pig', 0.6)} title="Gaman: Steer Left" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="pig" size={28} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('penguin', 0.6)} title="Darshan: Brake Shield" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="penguin" size={28} />
          </button>
        </div>
      </div>

      {/* Bottom Main Action Buttons (Positioned with safe clearance above mobile system navigation bar) */}
      <div
        className="w-full flex flex-col gap-2.5 max-w-[340px] z-10 mt-5"
        style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))' }}
      >
        <button
          onClick={handlePlay}
          className="group relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:brightness-105 active:scale-[0.98] text-slate-950 font-black text-base sm:text-lg shadow-[0_14px_32px_rgba(251,191,36,0.24)] border border-yellow-100/80 flex items-center justify-center gap-3 transition-all"
        >
          <span className="w-9 h-9 rounded-xl bg-slate-950/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <Play fill="currentColor" size={18} />
          </span>
          {unlockedLevel === 1 ? 'START ADVENTURE' : unlockedLevel > 50 ? 'ALL 50 LEVELS CLEARED! 🏆' : `PLAY LEVEL ${unlockedLevel}`}
        </button>

        <button
          onClick={handleLevels}
          className="w-full py-3.5 px-6 rounded-2xl bg-slate-950/25 hover:bg-slate-950/40 active:scale-[0.98] text-white font-extrabold text-sm shadow-lg border border-white/15 flex items-center justify-center gap-2 transition-all"
        >
          <Grid size={18} />
          EXPLORE LEVELS
        </button>
      </div>
    </div>
  );
}
