import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { LEVELS, CREW_MEMBERS } from '../data/levels';
import { useGame } from '../context/GameContext';
import { soundManager } from '../game/sound';
import StarRating from '../component/StarRating';

export default function LevelSelect() {
  const navigate = useNavigate();
  const { unlockedLevel, stars, bestTimes } = useGame();

  const handleSelectLevel = (levelId) => {
    if (levelId > unlockedLevel) {
      soundManager.playBump();
      return;
    }
    soundManager.playClick();
    navigate(`/play/${levelId}`);
  };

  const handleBack = () => {
    soundManager.playClick();
    navigate('/home');
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-900 text-white select-none overflow-hidden">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 py-4 bg-sky-950 border-b border-sky-800/50 shadow-md z-10">
        <button
          onClick={handleBack}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-white flex items-center justify-center border border-white/10 transition-transform"
          aria-label="Back to Home"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-xl font-black text-amber-300 uppercase tracking-wide">
          Select Level
        </h1>

        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Level Cards Grid */}
      <div 
        className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3"
        style={{ paddingBottom: 'max(5.5rem, calc(env(safe-area-inset-bottom, 0px) + 4.5rem))' }}
      >
        <div className="grid grid-cols-2 gap-3">
          {LEVELS.map((level) => {
            const isUnlocked = level.id <= unlockedLevel;
            const levelStars = stars[level.id] || 0;
            const bestTime = bestTimes[level.id];

            return (
              <div
                key={level.id}
                onClick={() => handleSelectLevel(level.id)}
                className={`relative rounded-2xl p-3.5 flex flex-col justify-between transition-all active:scale-95 cursor-pointer border-2 ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-sky-800 to-sky-950 border-sky-500/60 shadow-lg hover:border-yellow-400'
                    : 'bg-slate-950 border-slate-800 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Level number badge & status */}
                <div className="flex items-center justify-between">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                      isUnlocked
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {level.id}
                  </span>

                  {!isUnlocked ? (
                    <Lock size={16} className="text-slate-500" />
                  ) : (
                    <div className="scale-75 origin-right">
                      <StarRating stars={levelStars} size="sm" />
                    </div>
                  )}
                </div>

                {/* Level Name & Target */}
                <div className="my-2">
                  <h2 className="font-extrabold text-sm text-white truncate">
                    {level.name}
                  </h2>
                  <p className="text-[11px] font-bold text-sky-300">
                    Target: {level.targetTime}s
                  </p>
                </div>

                {/* Crew Avatars & Best Time */}
                <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-0.5">
                    {level.crewUnlocked.map((crewId) => (
                      <span key={crewId} className="text-xs">
                        {CREW_MEMBERS[crewId]?.avatar}
                      </span>
                    ))}
                  </div>

                  {bestTime !== undefined && (
                    <span className="font-mono text-[10px] text-emerald-400 font-bold">
                      {bestTime.toFixed(1)}s
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
