import React, { useState, useRef, useEffect } from 'react';
import { soundManager } from '../game/sound';
import AnimalAvatar from './AnimalAvatar';

/**
 * Thumb-friendly Gas Button for First Puff
 * Minimum 60px tap target
 * Touch & pointer events only
 * Visual charge meter and circular cooldown ring
 */
export default function CrewButton({
  crew,
  isUnlocked = true,
  onPuff,
  disabled = false
}) {
  const [isCharging, setIsCharging] = useState(false);
  const [chargeProgress, setChargeProgress] = useState(0); // 0.0 to 1.0
  const [cooldownProgress, setCooldownProgress] = useState(1); // 1.0 = ready, 0.0 = just fired

  const chargeStartTimeRef = useRef(0);
  const chargeAnimRef = useRef(null);
  const cooldownAnimRef = useRef(null);
  const isPressedRef = useRef(false);

  const COOLDOWN_DURATION = 600; // 0.6s cooldown
  const MAX_CHARGE_DURATION = 1000; // 1.0s to reach full charge

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (chargeAnimRef.current) cancelAnimationFrame(chargeAnimRef.current);
      if (cooldownAnimRef.current) cancelAnimationFrame(cooldownAnimRef.current);
    };
  }, []);

  const handlePointerDown = (e) => {
    e.preventDefault();
    if (!isUnlocked || disabled || cooldownProgress < 1 || isPressedRef.current) {
      return;
    }

    try {
      e.target.setPointerCapture?.(e.pointerId);
    } catch {
      // Ignore if pointer capture fails
    }

    isPressedRef.current = true;
    setIsCharging(true);
    chargeStartTimeRef.current = performance.now();
    setChargeProgress(0);

    soundManager.vibrate(15);

    const updateCharge = () => {
      if (!isPressedRef.current) return;
      const elapsed = performance.now() - chargeStartTimeRef.current;
      const progress = Math.min(1.0, elapsed / MAX_CHARGE_DURATION);
      setChargeProgress(progress);

      if (progress < 1.0) {
        chargeAnimRef.current = requestAnimationFrame(updateCharge);
      }
    };

    chargeAnimRef.current = requestAnimationFrame(updateCharge);
  };

  const handlePointerUp = (e) => {
    e.preventDefault();
    if (!isPressedRef.current) return;
    isPressedRef.current = false;

    if (chargeAnimRef.current) cancelAnimationFrame(chargeAnimRef.current);

    const elapsed = performance.now() - chargeStartTimeRef.current;
    const finalCharge = Math.min(1.0, Math.max(0, elapsed / MAX_CHARGE_DURATION));

    setIsCharging(false);
    setChargeProgress(0);

    // Trigger puff callback
    if (onPuff) {
      onPuff(crew.id, finalCharge);
    }

    // Start 0.6s cooldown refill ring
    setCooldownProgress(0);
    const cooldownStart = performance.now();

    const updateCooldown = () => {
      const timePassed = performance.now() - cooldownStart;
      const ratio = Math.min(1.0, timePassed / COOLDOWN_DURATION);
      setCooldownProgress(ratio);

      if (ratio < 1.0) {
        cooldownAnimRef.current = requestAnimationFrame(updateCooldown);
      }
    };

    cooldownAnimRef.current = requestAnimationFrame(updateCooldown);
  };

  const handlePointerCancel = (e) => {
    if (isPressedRef.current) {
      handlePointerUp(e);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-800/60 border-2 border-slate-700/50 flex flex-col items-center justify-center opacity-40 shadow-inner">
        <span className="text-xl filter grayscale">🔒</span>
        <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Locked</span>
      </div>
    );
  }

  // Circular progress calculations for SVG ring
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - cooldownProgress);

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Visual charge indicator badge when charging */}
      {isCharging && (
        <div className="absolute -top-7 px-2 py-0.5 rounded-full bg-yellow-400 text-slate-900 font-black text-xs shadow-md animate-bounce">
          {chargeProgress >= 0.95 ? 'MAX!' : `${Math.round(chargeProgress * 100)}%`}
        </div>
      )}

      <div
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={handlePointerCancel}
        style={{ touchAction: 'none' }}
        className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center cursor-pointer transition-transform active:scale-90 shadow-xl ${
          crew.bgColor
        } ${
          isCharging ? 'ring-4 ring-yellow-300 scale-105' : 'hover:brightness-110'
        } ${cooldownProgress < 1 ? 'opacity-85' : 'opacity-100'}`}
      >
        {/* Cooldown refill circle ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 72 72"
        >
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="rgba(0, 0, 0, 0.25)"
            strokeWidth="5"
          />
          {cooldownProgress < 1 && (
            <circle
              cx="36"
              cy="36"
              r={radius}
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          )}
        </svg>

        {/* Crew Vector Avatar */}
        <AnimalAvatar
          crew={crew.id}
          size={40}
          isPuffing={isCharging}
        />

        {/* Push Direction Label */}
        <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-tight drop-shadow-md -mt-0.5">
          {crew.label}
        </span>
      </div>
    </div>
  );
}
