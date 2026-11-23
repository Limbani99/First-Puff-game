import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { LEVELS } from '../data/levels';
import { useGame } from '../context/GameContext';
import { soundManager } from '../game/sound';
import StarRating from '../component/StarRating';
import AnimalAvatar from '../component/AnimalAvatar';

const ZONES = [
  { id: 'all', label: 'All', range: [1, 50], title: 'All 50 Levels' },
  { id: 'z1', label: '1–10', range: [1, 10], title: 'Level 1–10 | ખલાસી થી ભુવાજી (Entry Zone)' },
  { id: 'z2', label: '11–20', range: [11, 20], title: 'Level 11–20 | દેવાયત નો દબદબો (Khavad & Santhal)' },
  { id: 'z3', label: '21–30', range: [21, 30], title: 'Level 21–30 | રાવલ રોમાન્સ & ધારલ (Darshan & Dharal)' },
  { id: 'z4', label: '31–40', range: [31, 40], title: 'Level 31–40 | આદિત્ય નો અખાડો (Aditya Gadhvi Folk)' },
  { id: 'z5', label: '41–50', range: [41, 50], title: 'Level 41–50 | મહા સંગ્રામ : બાપ નો બાપ (Ultimate Clashes)' },
];

export default function LevelSelect() {
  const navigate = useNavigate();
  const { unlockedLevel, stars, bestTimes } = useGame();
  const [selectedZone, setSelectedZone] = useState('all');
  const activeLevelRef = useRef(null);

  // Auto-scroll to the current unlocked level card on load
  useEffect(() => {
    if (activeLevelRef.current) {
      setTimeout(() => {
        activeLevelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }, []);

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

  const currentZone = ZONES.find((z) => z.id === selectedZone) || ZONES[0];
  const displayedLevels = LEVELS.filter(
    (lvl) => lvl.id >= currentZone.range[0] && lvl.id <= currentZone.range[1]
  );

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-900 text-white select-none overflow-hidden">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 py-3.5 bg-sky-950 border-b border-sky-800/50 shadow-md z-10">
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

      {/* Zone Quick Jump Tabs */}
      <div className="w-full px-3 py-2 bg-slate-950/80 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar z-10 shrink-0">
        {ZONES.map((zone) => {
          const isSelected = selectedZone === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => {
                soundManager.playClick();
                setSelectedZone(zone.id);
              }}
              className={`px-3 py-1 rounded-full text-xs font-black uppercase whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {zone.label}
            </button>
          );
        })}
      </div>

      {/* Level Cards Grid */}
      <div 
        className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3"
        style={{ paddingBottom: 'max(5.5rem, calc(env(safe-area-inset-bottom, 0px) + 4.5rem))' }}
      >
        <div className="flex items-center justify-between px-1 text-xs font-black text-amber-300 uppercase tracking-wide">
          <span>{currentZone.title}</span>
          <span className="text-[10px] text-sky-300 font-bold">
            {displayedLevels.filter(l => l.id <= unlockedLevel).length} / {displayedLevels.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {displayedLevels.map((level) => {
            const isUnlocked = level.id <= unlockedLevel;
            const isCurrent = level.id === unlockedLevel;
            const levelStars = stars[level.id] || 0;
            const bestTime = bestTimes[level.id];

            return (
              <div
                key={level.id}
                ref={isCurrent ? activeLevelRef : null}
                onClick={() => handleSelectLevel(level.id)}
                className={`relative rounded-2xl p-3.5 flex flex-col justify-between transition-all active:scale-95 cursor-pointer border-2 ${
                  isCurrent
                    ? 'bg-gradient-to-br from-amber-900/60 to-sky-950 border-amber-400 shadow-xl ring-2 ring-amber-400/50'
                    : isUnlocked
                    ? 'bg-gradient-to-br from-sky-800 to-sky-950 border-sky-500/60 shadow-lg hover:border-yellow-400'
                    : 'bg-slate-950 border-slate-800 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Level number badge & status */}
                <div className="flex items-center justify-between">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                      isCurrent
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : isUnlocked
                        ? 'bg-sky-400 text-slate-950'
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
                  <div className="flex items-center gap-1">
                    {level.crewUnlocked.map((crewId) => (
                      <AnimalAvatar key={crewId} crew={crewId} size={15} />
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
