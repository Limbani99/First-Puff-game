import React from 'react';

export default function Obstacle({ type = 'rock' }) {
  if (type === 'rock') {
    return (
      <div className="w-8 h-8 rounded-full bg-amber-900 border-2 border-amber-500 shadow-md flex items-center justify-center text-xs">
        🎪
      </div>
    );
  }
  if (type === 'log') {
    return (
      <div className="w-14 h-6 rounded-full bg-amber-800 border-2 border-amber-600 shadow-md flex items-center justify-center text-xs text-amber-200 font-bold">
        🪵
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-white shadow-md flex items-center justify-center text-xs">
      ⛩️
    </div>
  );
}
