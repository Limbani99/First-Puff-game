import { useNavigate } from 'react-router-dom';
import { Play, Grid, Settings as SettingsIcon, User as UserIcon, Star } from 'lucide-react';
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
    <div className="relative w-full h-full flex flex-col items-center px-4 pt-4 pb-3 text-white bg-[linear-gradient(180deg,#08a9df_0%,#0789c3_45%,#00527a_100%)] select-none overflow-hidden no-scrollbar">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[270px] h-[270px] rounded-full border border-cyan-100/[0.07]" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[230px] h-[230px] rounded-full border border-cyan-100/[0.04]" />
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[270px] h-[270px] rounded-full border border-cyan-100/[0.07]" />
      </div>

      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between z-10">
        <div className="h-9 flex items-center gap-2 bg-sky-950/65 px-3 rounded-full border border-cyan-100/15 shadow-lg">
          <Star size={17} fill="currentColor" className="text-amber-300" />
          <span className="text-white font-black text-xs">{totalStars}<span className="text-white/60"> / 150</span></span>
        </div>

        <div className="flex items-center gap-2">
          {!isLoggedIn ? (
            <button
              onClick={() => {
                soundManager.playClick();
                navigate('/login');
              }}
              className="w-9 h-9 rounded-full bg-sky-950/65 hover:bg-sky-900/80 active:scale-95 text-white flex items-center justify-center shadow-md border border-cyan-100/15 transition-all"
              aria-label="Log In"
            >
              <UserIcon size={17} />
            </button>
          ) : (
            <button
              onClick={() => {
                soundManager.playClick();
                navigate('/profile');
              }}
              className="w-9 h-9 rounded-full bg-sky-950/65 hover:bg-sky-900/80 active:scale-95 text-white flex items-center justify-center border border-cyan-100/15 shadow-lg transition-all"
              aria-label="Profile and Online Sync"
            >
              <UserIcon size={17} />
            </button>
          )}

          <button
            onClick={handleSettings}
            className="w-9 h-9 rounded-full bg-sky-950/65 hover:bg-sky-900/80 active:scale-95 text-white flex items-center justify-center border border-cyan-100/15 shadow-lg transition-all"
            aria-label="Settings"
          >
            <SettingsIcon size={17} />
          </button>
        </div>
      </div>

      {/* Hero Title & Bobbing Raft */}
      <div className="flex flex-1 min-h-0 flex-col items-center justify-center z-10 w-full py-3">
        <div className="flex flex-col items-center mb-1">
          <h1 className="text-[clamp(1.25rem,6vw,1.55rem)] leading-none font-black text-amber-300 drop-shadow-[0_3px_5px_rgba(0,0,0,0.38)] tracking-wide uppercase font-sans text-center">
            Gujarati Banka Ho
          </h1>
          <p className="text-cyan-50/90 font-semibold text-[10px] leading-tight mt-1.5 text-center max-w-[240px]">
            Four Gujarati Bankas, ek raft, full power dhamaal!
          </p>
        </div>

        {/* Animated bobbing raft */}
        <div className="relative flex items-center justify-center w-full min-h-[clamp(130px,18vh,145px)]">
          <div className="absolute w-48 h-36 rounded-full bg-cyan-200/[0.04]" />
          <div className="absolute bottom-2 w-40 h-7 rounded-full border border-cyan-100/15 bg-cyan-100/[0.04]" />
          <div className="relative scale-[0.78] animate-bob cursor-pointer drop-shadow-[0_18px_18px_rgba(2,12,27,0.35)]" onClick={() => soundManager.playPuff('hippo', 0.6)}>
            <Raft />
          </div>
        </div>

        {/* Crew preview chips */}
        <div className="flex items-center gap-2.5 mt-1 bg-sky-950/55 px-3 py-1.5 rounded-xl border border-cyan-100/10 shadow-lg">
          <button type="button" onClick={() => soundManager.playPuff('hippo', 0.6)} title="Devayat: Forward Propulsion" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="hippo" size={22} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('frog', 0.6)} title="Aditya: Steer Right" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="frog" size={22} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('pig', 0.6)} title="Gaman: Steer Left" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="pig" size={22} />
          </button>
          <button type="button" onClick={() => soundManager.playPuff('penguin', 0.6)} title="Darshan: Brake Shield" className="rounded-full hover:scale-110 active:scale-95 transition-transform">
            <AnimalAvatar crew="penguin" size={22} />
          </button>
        </div>
      </div>

      {/* Bottom Main Action Buttons (Positioned with safe clearance above mobile system navigation bar) */}
      <div
        className="w-full flex flex-col gap-2 max-w-[236px] z-10 mt-1"
        style={{ paddingBottom: 'max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1rem))' }}
      >
        <button
          onClick={handlePlay}
          className="group relative w-full h-[50px] px-4 rounded-[14px] bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 active:scale-[0.98] text-white font-black text-sm shadow-[0_10px_24px_rgba(0,201,125,0.22)] border border-emerald-200/90 flex items-center justify-center gap-2.5 transition-all"
        >
          <Play fill="currentColor" size={17} className="group-hover:translate-x-0.5 transition-transform" />
          {unlockedLevel === 1 ? 'START ADVENTURE' : unlockedLevel > 50 ? 'ALL 50 LEVELS CLEARED! 🏆' : `PLAY LEVEL ${unlockedLevel}`}
        </button>

        <button
          onClick={handleLevels}
          className="w-full h-[40px] px-4 rounded-[14px] bg-sky-950/55 hover:bg-sky-950/75 active:scale-[0.98] text-white font-extrabold text-xs shadow-lg border border-cyan-100/15 flex items-center justify-center gap-2 transition-all"
        >
          <Grid size={15} />
          SELECT LEVEL
        </button>
      </div>
    </div>
  );
}
