import React from 'react';

/**
 * High-quality Cartoon Animal Avatars for First Puff
 * Handcrafted vector SVG illustrations with vibrant colors, cartoon expressions,
 * specular eye highlights, and blushing cheeks.
 */

export function HippoAvatar({ size = 36, className = '', isPuffing = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform ${isPuffing ? 'scale-110 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : ''} ${className}`}
    >
      <defs>
        <radialGradient id="hippoHeadGrad" cx="36" cy="30" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="0.75" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#6d28d9" />
        </radialGradient>
        <radialGradient id="hippoSnoutGrad" cx="36" cy="46" r="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c084fc" />
          <stop offset="0.8" stopColor="#a855f7" />
          <stop offset="1" stopColor="#7e22ce" />
        </radialGradient>
      </defs>

      {/* Outer Glow when puffing */}
      {isPuffing && (
        <circle cx="36" cy="36" r="33" fill="#c084fc" opacity="0.35" />
      )}

      {/* Ears */}
      <circle cx="15" cy="19" r="8" fill="#7c3aed" />
      <circle cx="15" cy="19" r="4.5" fill="#f472b6" />
      <circle cx="57" cy="19" r="8" fill="#7c3aed" />
      <circle cx="57" cy="19" r="4.5" fill="#f472b6" />

      {/* Head */}
      <circle cx="36" cy="35" r="27" fill="url(#hippoHeadGrad)" />

      {/* Blushing Cheeks */}
      <ellipse cx="17" cy="38" rx="5" ry="3.5" fill="#f472b6" opacity="0.6" />
      <ellipse cx="55" cy="38" rx="5" ry="3.5" fill="#f472b6" opacity="0.6" />

      {/* Eyes */}
      <ellipse cx="26" cy="28" rx="5.5" ry="6.5" fill="#ffffff" />
      <circle cx="26" cy="28.5" r="3.5" fill="#1e1b4b" />
      <circle cx="24.5" cy="26.5" r="1.5" fill="#ffffff" />

      <ellipse cx="46" cy="28" rx="5.5" ry="6.5" fill="#ffffff" />
      <circle cx="46" cy="28.5" r="3.5" fill="#1e1b4b" />
      <circle cx="44.5" cy="26.5" r="1.5" fill="#ffffff" />

      {/* Eyebrows */}
      <path d="M22 20 C24 18 28 19 30 21" stroke="#581c87" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 20 C48 18 44 19 42 21" stroke="#581c87" strokeWidth="2" strokeLinecap="round" />

      {/* Big Chubby Snout */}
      <ellipse cx="36" cy="48" rx="22" ry="16" fill="url(#hippoSnoutGrad)" />
      <ellipse cx="36" cy="44" rx="18" ry="11" fill="#c084fc" opacity="0.4" />

      {/* Nostrils */}
      <ellipse cx="28" cy="46" rx="3.5" ry="5" fill="#4c1d95" />
      <ellipse cx="44" cy="46" rx="3.5" ry="5" fill="#4c1d95" />
      <ellipse cx="28" cy="45" rx="1.5" ry="2.5" fill="#2e1065" />
      <ellipse cx="44" cy="45" rx="1.5" ry="2.5" fill="#2e1065" />

      {/* Cute little teeth / smile */}
      <path d="M31 56 Q36 60 41 56" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <rect x="33" y="55" width="2.5" height="3" rx="1" fill="#ffffff" />
      <rect x="36.5" y="55" width="2.5" height="3" rx="1" fill="#ffffff" />
    </svg>
  );
}

export function FrogAvatar({ size = 36, className = '', isPuffing = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform ${isPuffing ? 'scale-110 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]' : ''} ${className}`}
    >
      <defs>
        <radialGradient id="frogHeadGrad" cx="36" cy="38" r="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ade80" />
          <stop offset="0.75" stopColor="#22c55e" />
          <stop offset="1" stopColor="#15803d" />
        </radialGradient>
      </defs>

      {/* Outer Glow when puffing */}
      {isPuffing && (
        <circle cx="36" cy="36" r="33" fill="#86efac" opacity="0.35" />
      )}

      {/* Eye Turrets (Green bumps atop head) */}
      <circle cx="21" cy="22" r="12" fill="#22c55e" />
      <circle cx="51" cy="22" r="12" fill="#22c55e" />

      {/* Main Head Base */}
      <ellipse cx="36" cy="42" rx="27" ry="22" fill="url(#frogHeadGrad)" />

      {/* Cute Pale Throat / Belly Patch */}
      <ellipse cx="36" cy="48" rx="17" ry="12" fill="#bef264" opacity="0.85" />

      {/* Big Bulging Cartoon Eyes */}
      <circle cx="21" cy="22" r="9.5" fill="#ffffff" />
      <ellipse cx="22" cy="22.5" rx="5" ry="6" fill="#0f172a" />
      <circle cx="20" cy="20" r="2.2" fill="#ffffff" />
      <circle cx="23.5" cy="24.5" r="1" fill="#ffffff" />

      <circle cx="51" cy="22" r="9.5" fill="#ffffff" />
      <ellipse cx="50" cy="22.5" rx="5" ry="6" fill="#0f172a" />
      <circle cx="48" cy="20" r="2.2" fill="#ffffff" />
      <circle cx="51.5" cy="24.5" r="1" fill="#ffffff" />

      {/* Rosy Cheeks */}
      <circle cx="16" cy="45" r="5" fill="#f87171" opacity="0.5" />
      <circle cx="56" cy="45" r="5" fill="#f87171" opacity="0.5" />

      {/* Nostrils */}
      <circle cx="33" cy="38" r="1.2" fill="#14532d" />
      <circle cx="39" cy="38" r="1.2" fill="#14532d" />

      {/* Big Cheerful Smiling Mouth */}
      <path
        d="M22 46 Q36 58 50 46"
        stroke="#14532d"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tongue / mouth interior hint */}
      <path
        d="M31 51 Q36 55 41 51"
        fill="#f43f5e"
        opacity="0.9"
      />
    </svg>
  );
}

export function PigAvatar({ size = 36, className = '', isPuffing = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform ${isPuffing ? 'scale-110 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]' : ''} ${className}`}
    >
      <defs>
        <radialGradient id="pigHeadGrad" cx="36" cy="34" r="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbcfe8" />
          <stop offset="0.65" stopColor="#f472b6" />
          <stop offset="1" stopColor="#db2777" />
        </radialGradient>
        <linearGradient id="pigSnoutGrad" x1="24" y1="40" x2="48" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f472b6" />
          <stop offset="1" stopColor="#e11d48" />
        </linearGradient>
      </defs>

      {/* Outer Glow when puffing */}
      {isPuffing && (
        <circle cx="36" cy="36" r="33" fill="#fbcfe8" opacity="0.35" />
      )}

      {/* Pointy Floppy Pig Ears */}
      <path d="M14 26 C10 10 24 14 26 22 Z" fill="#ec4899" />
      <path d="M15 24 C13 14 22 17 23 22 Z" fill="#be185d" />

      <path d="M58 26 C62 10 48 14 46 22 Z" fill="#ec4899" />
      <path d="M57 24 C59 14 50 17 49 22 Z" fill="#be185d" />

      {/* Head */}
      <circle cx="36" cy="37" r="26" fill="url(#pigHeadGrad)" />

      {/* Rosy Cheeks */}
      <ellipse cx="17" cy="42" rx="5" ry="3.5" fill="#e11d48" opacity="0.45" />
      <ellipse cx="55" cy="42" rx="5" ry="3.5" fill="#e11d48" opacity="0.45" />

      {/* Sparkling Cartoon Eyes */}
      <ellipse cx="26" cy="31" rx="4.5" ry="5.5" fill="#1e1b4b" />
      <circle cx="24.5" cy="29.5" r="1.8" fill="#ffffff" />
      <circle cx="27.5" cy="33.5" r="0.9" fill="#ffffff" />

      <ellipse cx="46" cy="31" rx="4.5" ry="5.5" fill="#1e1b4b" />
      <circle cx="44.5" cy="29.5" r="1.8" fill="#ffffff" />
      <circle cx="47.5" cy="33.5" r="0.9" fill="#ffffff" />

      {/* Big Oval Pig Snout */}
      <ellipse cx="36" cy="47" rx="14" ry="10" fill="url(#pigSnoutGrad)" />
      <ellipse cx="36" cy="45" rx="12" ry="7" fill="#f472b6" opacity="0.5" />

      {/* Snout Nostrils */}
      <ellipse cx="31.5" cy="47" rx="2.8" ry="4" fill="#881337" />
      <ellipse cx="40.5" cy="47" rx="2.8" ry="4" fill="#881337" />
      <circle cx="31" cy="46" r="1" fill="#4c0519" />
      <circle cx="40" cy="46" r="1" fill="#4c0519" />

      {/* Smile below snout */}
      <path d="M31 58 Q36 61 41 58" stroke="#9d174d" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function PenguinAvatar({ size = 36, className = '', isPuffing = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform ${isPuffing ? 'scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''} ${className}`}
    >
      <defs>
        <radialGradient id="penguinHeadGrad" cx="36" cy="32" r="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#334155" />
          <stop offset="0.65" stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </radialGradient>
      </defs>

      {/* Outer Glow when puffing */}
      {isPuffing && (
        <circle cx="36" cy="36" r="33" fill="#67e8f9" opacity="0.35" />
      )}

      {/* Head / Body Base */}
      <circle cx="36" cy="36" r="27" fill="url(#penguinHeadGrad)" />

      {/* Cute White Tuxedo Face Patch */}
      <path
        d="M21 34 C19 22 28 20 36 26 C44 20 53 22 51 34 C50 48 44 58 36 58 C28 58 22 48 21 34 Z"
        fill="#f8fafc"
      />

      {/* Blushing Cheeks */}
      <circle cx="23" cy="41" r="4.5" fill="#fb7185" opacity="0.45" />
      <circle cx="49" cy="41" r="4.5" fill="#fb7185" opacity="0.45" />

      {/* Sparkling Cartoon Eyes */}
      <ellipse cx="29" cy="33" rx="4" ry="5.5" fill="#0f172a" />
      <circle cx="27.8" cy="31.5" r="1.6" fill="#ffffff" />
      <circle cx="30" cy="35" r="0.8" fill="#ffffff" />

      <ellipse cx="43" cy="33" rx="4" ry="5.5" fill="#0f172a" />
      <circle cx="41.8" cy="31.5" r="1.6" fill="#ffffff" />
      <circle cx="44" cy="35" r="0.8" fill="#ffffff" />

      {/* Bright Golden Orange Beak */}
      <path
        d="M30 40 Q36 37 42 40 L36 50 Z"
        fill="#f59e0b"
      />
      <path
        d="M32 40 Q36 38 40 40 L36 43 Z"
        fill="#fef08a"
      />
      <path
        d="M30 40 L36 50 L42 40"
        stroke="#d97706"
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export const AVATAR_MAP = {
  hippo: '/avatar/devayath.webp',
  devayat: '/avatar/devayath.webp',
  devayath: '/avatar/devayath.webp',
  'devayat khavad': '/avatar/devayath.webp',
  '🦛': '/avatar/devayath.webp',

  frog: '/avatar/Aditya-Gadhvi.webp',
  aditya: '/avatar/Aditya-Gadhvi.webp',
  'aditya-gadhvi': '/avatar/Aditya-Gadhvi.webp',
  'aditya gadhvi': '/avatar/Aditya-Gadhvi.webp',
  '🐸': '/avatar/Aditya-Gadhvi.webp',

  pig: '/avatar/singer-gaman-santhal.webp',
  gaman: '/avatar/singer-gaman-santhal.webp',
  'singer-gaman-santhal': '/avatar/singer-gaman-santhal.webp',
  'gaman santhal': '/avatar/singer-gaman-santhal.webp',
  '🐷': '/avatar/singer-gaman-santhal.webp',

  penguin: '/avatar/Darshan-Raval.webp',
  darshan: '/avatar/Darshan-Raval.webp',
  'darshan-raval': '/avatar/Darshan-Raval.webp',
  'darshan raval': '/avatar/Darshan-Raval.webp',
  '🐧': '/avatar/Darshan-Raval.webp',
};

/**
 * Universal Avatar Dispatcher
 * Renders the custom avatar photos from /avatar/ folder in public,
 * with graceful fallback to vector art if needed.
 */
export default function AnimalAvatar({ crew = 'hippo', size = 36, className = '', isPuffing = false, fallback = '⭐' }) {
  const norm = String(crew || '').toLowerCase().trim();
  const imgSrc = AVATAR_MAP[norm];

  const sizePx = typeof size === 'number' ? `${size}px` : size;

  if (imgSrc) {
    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 select-none shadow-sm transition-transform ${
          isPuffing ? 'scale-110 drop-shadow-[0_0_8px_rgba(250,204,21,0.85)]' : ''
        } ${className}`}
        style={{ width: sizePx, height: sizePx }}
      >
        <img
          src={imgSrc}
          alt={norm}
          className="w-full h-full object-cover rounded-full select-none pointer-events-none"
          style={{ objectPosition: 'center 30%' }}
          loading="eager"
        />
      </div>
    );
  }

  if (norm === 'hippo' || norm === '🦛') {
    return <HippoAvatar size={size} className={className} isPuffing={isPuffing} />;
  }
  if (norm === 'frog' || norm === '🐸') {
    return <FrogAvatar size={size} className={className} isPuffing={isPuffing} />;
  }
  if (norm === 'pig' || norm === '🐷') {
    return <PigAvatar size={size} className={className} isPuffing={isPuffing} />;
  }
  if (norm === 'penguin' || norm === '🐧') {
    return <PenguinAvatar size={size} className={className} isPuffing={isPuffing} />;
  }

  // Fallback to text emoji if sleeping or other
  return (
    <span
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ fontSize: typeof size === 'number' ? `${Math.round(size * 0.7)}px` : size }}
    >
      {fallback || '💤'}
    </span>
  );
}
