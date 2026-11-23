import React from 'react';
import AnimalAvatar from './AnimalAvatar';

/**
 * Raft icon / cartoon preview with crew members
 */
export default function Raft({ activeCrew = ['hippo', 'frog', 'pig', 'penguin'], className = '' }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Raft wooden logs base */}
      <div className="relative w-32 h-36 bg-amber-800 rounded-2xl border-4 border-amber-900 shadow-2xl p-1.5 flex flex-col justify-between overflow-hidden">
        {/* Wood planks texture */}
        <div className="absolute inset-0 flex justify-between px-2 pointer-events-none opacity-40">
          <div className="w-1 h-full bg-amber-950" />
          <div className="w-1 h-full bg-amber-950" />
          <div className="w-1 h-full bg-amber-950" />
        </div>

        {/* Rope bindings */}
        <div className="absolute top-3 left-0 w-full h-1.5 bg-yellow-200 opacity-60" />
        <div className="absolute bottom-3 left-0 w-full h-1.5 bg-yellow-200 opacity-60" />

        {/* Penguin at Front/Top */}
        <div className="w-full flex justify-center z-10">
          {activeCrew.includes('penguin') ? (
            <AnimalAvatar crew="penguin" size={30} className="filter drop-shadow" />
          ) : (
            <span className="text-xl">💤</span>
          )}
        </div>

        {/* Middle row: Frog (left) & Pig (right) */}
        <div className="w-full flex justify-between px-1 z-10">
          {activeCrew.includes('frog') ? (
            <AnimalAvatar crew="frog" size={30} className="filter drop-shadow" />
          ) : (
            <span className="text-xl">💤</span>
          )}
          {activeCrew.includes('pig') ? (
            <AnimalAvatar crew="pig" size={30} className="filter drop-shadow" />
          ) : (
            <span className="text-xl">💤</span>
          )}
        </div>

        {/* Hippo at Back/Bottom */}
        <div className="w-full flex justify-center z-10">
          {activeCrew.includes('hippo') ? (
            <AnimalAvatar crew="hippo" size={32} className="filter drop-shadow" />
          ) : (
            <span className="text-xl">💤</span>
          )}
        </div>
      </div>
    </div>
  );
}
