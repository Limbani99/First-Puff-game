import React from 'react';

/**
 * MobileLayout: Single-player, offline phone-first layout container
 * Designed around 360x800, perfectly centered and responsive on all screens
 */
export default function MobileLayout({ children }) {
  return (
    <div className="w-full h-full min-h-screen bg-slate-950 flex justify-center items-center overflow-hidden select-none">
      {/* Mobile viewport frame (max 440px width, 100% height) */}
      <main className="relative w-full max-w-[440px] h-full h-[100dvh] bg-sky-900 shadow-2xl flex flex-col overflow-hidden sm:border-x sm:border-slate-800">
        {children}
      </main>
    </div>
  );
}
