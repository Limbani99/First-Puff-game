import React, { useEffect, useState } from 'react';

export default function HintBanner({ hint, duration = 3500 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [hint, duration]);

  if (!visible || !hint) return null;

  return (
    <div className="absolute top-16 left-0 right-0 mx-auto w-[90%] max-w-[340px] z-30 transition-all duration-300 pointer-events-none animate-bounce">
      <div className="bg-amber-400 text-slate-900 px-4 py-2.5 rounded-2xl shadow-2xl border-2 border-white flex items-center gap-2.5">
        <span className="text-2xl">💡</span>
        <p className="font-extrabold text-xs sm:text-sm leading-tight text-slate-900">
          {hint}
        </p>
      </div>
    </div>
  );
}
