import React from 'react';
import { Pause } from 'lucide-react';
import { soundManager } from '../game/sound';

export default function HUD({
  level,
  elapsedTime = 0,
  bumps = 0,
  onPause
}) {
  const handlePause = () => {
    soundManager.playClick();
    if (onPause) onPause();
  };

  const isUnderTarget = elapsedTime <= level.targetTime;

  return (
    <div className="w-full flex items-center justify-between px-3 pt-3 pb-1 pointer-events-none select-none z-20">
      {/* Level Info & Target */}
      <div className="flex flex-col gap-1 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-sky-600/90 text-white font-extrabold text-xs shadow-md border border-sky-400/40">
            Level {level.id}
          </span>
          <span className="text-white font-black text-sm drop-shadow-md truncate max-w-[130px]">
            {level.name}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-sky-100">
          <span className="bg-slate-900/60 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10 flex items-center gap-1">
            🎯 Target: {level.targetTime}s
          </span>
        </div>
      </div>

      {/* Timer & Bumps & Pause Button */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Timer */}
        <div
          className={`px-3 py-1 rounded-xl font-mono font-black text-sm shadow-md border backdrop-blur-sm ${
            isUnderTarget
              ? 'bg-slate-900/70 text-emerald-300 border-emerald-500/30'
              : 'bg-slate-900/70 text-amber-400 border-amber-500/30'
          }`}
        >
          ⏱️ {elapsedTime.toFixed(1)}s
        </div>

        {/* Bumps / Collision counter (Limit: 10) */}
        <div
          className={`px-2.5 py-1 rounded-xl font-black text-xs shadow-md border backdrop-blur-sm transition-colors ${
            bumps < 7
              ? 'bg-slate-900/70 text-sky-200 border-white/10'
              : bumps < 10
              ? 'bg-amber-950/80 text-amber-300 border-amber-500/50 animate-pulse'
              : 'bg-rose-950/90 text-rose-300 border-rose-500/60 animate-bounce'
          }`}
          title="Collisions (Game Over at 10)"
        >
          💥 {bumps}/10
        </div>

        {/* Pause Button */}
        <button
          onClick={handlePause}
          className="w-9 h-9 rounded-xl bg-slate-900/80 hover:bg-slate-800 active:scale-95 text-white flex items-center justify-center border border-white/20 shadow-md transition-transform"
          aria-label="Pause"
        >
          <Pause size={18} />
        </button>
      </div>
    </div>
  );
}
