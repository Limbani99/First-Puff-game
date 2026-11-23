import React, { useEffect } from 'react';
import { soundManager } from '../game/sound';

export default function StarRating({ stars = 0, size = 'md', animated = false }) {
  useEffect(() => {
    if (animated && stars > 0) {
      for (let i = 1; i <= stars; i++) {
        setTimeout(() => {
          soundManager.playStar(i);
        }, i * 320);
      }
    }
  }, [animated, stars]);

  const sizeClasses = {
    sm: 'text-base gap-1',
    md: 'text-2xl gap-2',
    lg: 'text-4xl gap-3'
  };

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size] || sizeClasses.md}`}>
      {[1, 2, 3].map((num) => {
        const isFilled = num <= stars;
        return (
          <span
            key={num}
            className={`transition-all duration-300 drop-shadow-md select-none ${
              isFilled ? 'text-amber-400 scale-105' : 'text-slate-600 scale-90 opacity-40'
            } ${animated && isFilled ? 'animate-bounce' : ''}`}
            style={{
              animationDelay: `${(num - 1) * 300}ms`,
              animationDuration: '1.2s'
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
