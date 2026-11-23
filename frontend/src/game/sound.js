// Procedural Web Audio API sound engine for First Puff
// 100% offline, zero external asset dependencies, family-friendly cartoon audio

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export const soundManager = {
  muted: false,
  vibrationEnabled: true,

  setMuted(mute) {
    this.muted = mute;
  },

  setVibration(enable) {
    this.vibrationEnabled = enable;
  },

  vibrate(ms = 35) {
    if (!this.vibrationEnabled || typeof window === 'undefined') return;
    try {
      if (navigator.vibrate) {
        navigator.vibrate(ms);
      }
    } catch {
      // Ignore vibration errors on unsupported devices
    }
  },

  // Play cartoon puff sound tailored to each crew member
  playPuff(crew = 'hippo', charge = 0.5) {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const t = ctx.currentTime;
    const chargeMult = 0.6 + charge * 0.8;

    // Pitch settings per crew member
    let baseFreq = 85;
    let endFreq = 42;
    let type = 'sawtooth';
    let duration = 0.22 * chargeMult;

    if (crew === 'hippo') {
      // Deep resonant bass fart
      baseFreq = 80;
      endFreq = 40;
      type = 'sawtooth';
      duration = 0.28 * chargeMult;
    } else if (crew === 'frog') {
      // Bubbly wet ribbit puff
      baseFreq = 210;
      endFreq = 120;
      type = 'triangle';
      duration = 0.18 * chargeMult;
    } else if (crew === 'pig') {
      // Snorty squelchy puff
      baseFreq = 260;
      endFreq = 160;
      type = 'sawtooth';
      duration = 0.22 * chargeMult;
    } else if (crew === 'penguin') {
      // Cute high-pitched brake toot
      baseFreq = 420;
      endFreq = 260;
      type = 'sine';
      duration = 0.15 * chargeMult;
    }

    try {
      // Oscillator 1 - primary pitch bend
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = type;
      osc.frequency.setValueAtTime(baseFreq, t);
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t + duration);

      // Lowpass filter for cartoon squelch
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(crew === 'penguin' ? 2400 : 1200, t);
      filter.frequency.exponentialRampToValueAtTime(300, t + duration);
      filter.Q.setValueAtTime(3, t);

      // Amplitude envelope
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.45 * chargeMult, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + duration);

      // Add a tiny noise burst for cartoon texture
      if (crew !== 'penguin') {
        const bufferSize = ctx.sampleRate * (duration * 0.6);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(crew === 'frog' ? 650 : 380, t);
        noiseFilter.Q.setValueAtTime(2.5, t);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.18 * chargeMult, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + duration * 0.6);

        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        whiteNoise.start(t);
        whiteNoise.stop(t + duration * 0.6);
      }
    } catch {
      // Audio fallback
    }

    this.vibrate(Math.round(25 + charge * 45));
  },

  // Soft cartoon bump / bonk sound
  playBump() {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(55, t + 0.14);

      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.14);
    } catch {
      // Audio fallback
    }

    this.vibrate(20);
  },

  // Water splash sound
  playSplash() {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, t);
      filter.frequency.exponentialRampToValueAtTime(250, t + 0.15);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(t);
      noise.stop(t + 0.15);
    } catch {
      // Audio fallback
    }
  },

  // Level complete fanfare
  playWin() {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.11);

        gain.gain.setValueAtTime(0.01, now + idx * 0.11);
        gain.gain.linearRampToValueAtTime(0.3, now + idx * 0.11 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.11 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.11);
        osc.stop(now + idx * 0.11 + 0.35);
      });
    } catch {
      // Audio fallback
    }

    this.vibrate([40, 60, 40, 100]);
  },

  // Cartoon Game Over sound (descending sad trombone chords)
  playGameOver() {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // Sad descending tones: F3, E3, Eb3, D3
      const tones = [174.61, 164.81, 155.56, 146.83];
      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.18);
        osc.frequency.exponentialRampToValueAtTime(Math.max(30, freq * 0.88), now + idx * 0.18 + 0.24);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(850, now + idx * 0.18);

        gain.gain.setValueAtTime(0.01, now + idx * 0.18);
        gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.18 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.18 + 0.26);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.18);
        osc.stop(now + idx * 0.18 + 0.27);
      });
    } catch {
      // Audio fallback
    }

    this.vibrate([100, 60, 200]);
  },

  // Star sound (index: 1, 2, or 3)
  playStar(index = 1) {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
      const freq = frequencies[Math.min(index - 1, 2)] || 523.25;
      const t = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, t + 0.22);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);
    } catch {
      // Audio fallback
    }
  },

  // Button click / tap
  playClick() {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.04);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.04);
    } catch {
      // Audio fallback
    }
  }
};
