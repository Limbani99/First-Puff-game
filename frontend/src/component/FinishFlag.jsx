import React from 'react';

export default function FinishFlag({ size = 'md' }) {
  const sizeClass = size === 'sm' ? 'w-6 h-6 text-sm' : 'w-10 h-10 text-xl';
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-yellow-400/20 border-2 border-yellow-400 ${sizeClass}`}>
      🏁
    </div>
  );
}
