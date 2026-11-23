import React from 'react';

/**
 * Gas Meter component for displaying charge levels or gas status
 */
export default function GasMeter({ charge = 0, isCharging = false }) {
  if (!isCharging) return null;

  return (
    <div className="w-36 h-3 bg-slate-900/80 rounded-full border border-white/20 p-0.5 overflow-hidden shadow-lg backdrop-blur-sm">
      <div
        className="h-full rounded-full transition-all duration-75 bg-gradient-to-r from-emerald-400 via-yellow-400 to-rose-500"
        style={{ width: `${Math.min(100, Math.max(5, charge * 100))}%` }}
      />
    </div>
  );
}
