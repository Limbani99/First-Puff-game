import React from 'react';

/**
 * MobileLayout: Single-player, offline phone-first layout container
 * Designed around 360x800, perfectly centered and responsive on all screens
 */
export default function MobileLayout({ children }) {
  return (
    <div className="relative isolate w-full h-full min-h-screen bg-[#07111f] flex justify-center items-center overflow-hidden select-none">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[min(90vw,720px)] h-[min(90vw,720px)] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <main className="relative w-full max-w-[440px] h-[100dvh] bg-sky-950 shadow-[0_32px_100px_rgba(0,0,0,0.55)] flex flex-col overflow-hidden sm:my-4 sm:h-[calc(100dvh-2rem)] sm:rounded-[2rem] sm:border sm:border-white/10">
        {children}
      </main>
    </div>
  );
}
