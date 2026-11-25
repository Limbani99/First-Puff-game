import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { soundManager } from '../game/sound';
import Raft from '../component/Raft';

export default function Splash() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Play funny welcome puff sound on user gesture or start
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  const handleStart = () => {
    soundManager.playPuff('hippo', 0.8);
    navigate('/home');
  };

  return (
    <div
      onClick={handleStart}
      className="relative w-full h-full flex flex-col items-center justify-between py-10 px-6 bg-gradient-to-b from-sky-400 via-sky-600 to-sky-900 cursor-pointer overflow-hidden"
    >
      {/* Cartoon clouds in sky */}
      <div className="absolute top-6 left-6 text-4xl opacity-80 animate-pulse">☁️</div>
      <div className="absolute top-12 right-8 text-5xl opacity-70 animate-pulse">☁️</div>

      {/* Title Header */}
      <div className="flex flex-col items-center mt-8 z-10 text-center">
        <span className="text-4xl animate-bounce">💨</span>
        <h1 className="text-4xl sm:text-5xl font-black text-amber-300 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-wider uppercase font-sans text-center">
          Gujarati Banka Ho
        </h1>
        <p className="text-sky-100 font-extrabold text-xs sm:text-sm mt-1 tracking-wide uppercase drop-shadow text-center">
          Desi Banka Raft Adventure
        </p>
      </div>

      {/* Animated Bobbing Raft */}
      <div className="relative flex flex-col items-center my-auto z-10">
        <div className="animate-bob">
          <Raft />
        </div>
        {/* Animated puff cloud beneath */}
        <div className="flex items-center gap-1 mt-4 animate-pulse">
          <span className="text-2xl">💨</span>
          <span className="text-xs font-black text-white bg-slate-900/60 px-3 py-1 rounded-full border border-white/20">
 created by <span className="text-amber-400">Desi Banka</span> & <span className="text-amber-400">MANN PATEL</span>
           </span>
        </div>
      </div>

      {/* Loading Progress & Tap to Start (safely elevated above mobile OS navigation bar) */}
      <div 
        className="w-full flex flex-col items-center max-w-[260px] z-10"
        style={{ marginBottom: 'max(4.25rem, calc(env(safe-area-inset-bottom, 0px) + 3.75rem))' }}
      >
        {progress < 100 ? (
          <div className="w-full">
            <div className="w-full h-3 bg-slate-900/70 rounded-full overflow-hidden border border-white/30 p-0.5">
              <div
                className="h-full bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[11px] font-bold text-sky-200 text-center mt-2">
              Inflating the crew... {progress}%
            </p>
          </div>
        ) : (
          <button
            onClick={handleStart}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-lg shadow-2xl border-2 border-white animate-bounce active:scale-95"
          >
            TAP TO PLAY! 💨
          </button>
        )}
      </div>
    </div>
  );
}
