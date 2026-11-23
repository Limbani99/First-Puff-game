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
  currentMusic: null,

  setMuted(mute) {
    this.muted = mute;
    if (mute) {
      this.stopMusic();
    }
  },

  setVibration(enable) {
    this.vibrationEnabled = enable;
  },

  // Play victory music from /music/win music.mp3 one time
  playWinMusic() {
    if (this.muted) return;
    this.stopMusic();
    try {
      const audio = new Audio(encodeURI('/music/win music.mp3'));
      audio.loop = false;
      audio.volume = 0.75;
      this.currentMusic = audio;
      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.warn('Win music playback error:', err);
        });
      }
    } catch (e) {
      console.warn('Win music error:', e);
    }
  },

  // Play loss music from /music/loss music.mp3 one time
  playLossMusic() {
    if (this.muted) return;
    this.stopMusic();
    try {
      const audio = new Audio(encodeURI('/music/loss music.mp3'));
      audio.loop = false;
      audio.volume = 0.75;
      this.currentMusic = audio;
      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.warn('Loss music playback error:', err);
        });
      }
    } catch (e) {
      console.warn('Loss music error:', e);
    }
  },

  // Play Darshan Raval & Dharal song when touching the Dharal obstacle
  playDharalMusic() {
    if (this.muted) return;
    this.stopMusic();
    try {
      const audio = new Audio(encodeURI('/music/darshan wife song.mp3'));
      audio.loop = false;
      audio.volume = 0.85;
      this.currentMusic = audio;
      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.warn('Dharal music playback error:', err);
        });
      }
    } catch (e) {
      console.warn('Dharal music error:', e);
    }
  },

  // Stop currently playing win or loss music track
  stopMusic() {
    if (this.currentMusic) {
      try {
        this.currentMusic.pause();
        this.currentMusic.currentTime = 0;
      } catch {}
      this.currentMusic = null;
    }
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

  // Play rich, comedic, character-specific cartoon puff audio
  playPuff(crew = 'hippo', charge = 0.5) {
    if (this.muted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const t = ctx.currentTime;
    const clampedCharge = Math.max(0, Math.min(1, charge));
    const intensity = 0.7 + clampedCharge * 0.7; // 0.7 to 1.4

    try {
      if (crew === 'hippo') {
        // === HIPPO: Deep, vibrating cartoon sub-bass rumble & motorboat puff ===
        const duration = 0.34 * intensity;

        // 1. Primary flutter oscillator (sawtooth) with vibrato LFO
        const osc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(95, t);
        osc.frequency.exponentialRampToValueAtTime(34, t + duration);

        // LFO flutter for that comedic motorboat "flub-flub-flub" puff vibration
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(26, t);
        lfo.frequency.linearRampToValueAtTime(14, t + duration);
        lfoGain.gain.setValueAtTime(20, t);
        lfoGain.gain.linearRampToValueAtTime(5, t + duration);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        // Resonant lowpass sweep for thick cartoon squelch
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, t);
        filter.frequency.exponentialRampToValueAtTime(110, t + duration);
        filter.Q.setValueAtTime(4.5, t);

        // Main gain envelope
        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.52 * intensity, t + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        // 2. Deep Sub-bass punch (sine wave)
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(65, t);
        subOsc.frequency.exponentialRampToValueAtTime(26, t + duration);

        subGain.gain.setValueAtTime(0.01, t);
        subGain.gain.linearRampToValueAtTime(0.42 * intensity, t + 0.02);
        subGain.gain.exponentialRampToValueAtTime(0.001, t + duration * 0.9);

        subOsc.connect(subGain);
        subGain.connect(ctx.destination);

        // 3. Air blast noise puff
        this._playNoiseBurst(ctx, t, duration * 0.65, 340, 2.0, 0.22 * intensity);

        osc.start(t);
        lfo.start(t);
        subOsc.start(t);

        osc.stop(t + duration);
        lfo.stop(t + duration);
        subOsc.stop(t + duration);

      } else if (crew === 'frog') {
        // === FROG: Bubbly, wet ribbit puff with rapid FM croak modulation ===
        const duration = 0.24 * intensity;

        // Fast bubbling LFO for rapid ribbit texture
        const osc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280, t);
        osc.frequency.exponentialRampToValueAtTime(105, t + duration);

        // Fast bubble LFO (38Hz -> 20Hz)
        lfo.type = 'sawtooth';
        lfo.frequency.setValueAtTime(38, t);
        lfo.frequency.linearRampToValueAtTime(20, t + duration);
        lfoGain.gain.setValueAtTime(75, t);
        lfoGain.gain.linearRampToValueAtTime(18, t + duration);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        // Throat pouch formant bandpass filter
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(780, t);
        filter.frequency.exponentialRampToValueAtTime(260, t + duration);
        filter.Q.setValueAtTime(5.5, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.55 * intensity, t + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        // High bubble blip overlay
        const blipOsc = ctx.createOscillator();
        const blipGain = ctx.createGain();
        blipOsc.type = 'sine';
        blipOsc.frequency.setValueAtTime(460, t);
        blipOsc.frequency.exponentialRampToValueAtTime(880, t + 0.06);
        blipGain.gain.setValueAtTime(0.01, t);
        blipGain.gain.linearRampToValueAtTime(0.22 * intensity, t + 0.02);
        blipGain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
        blipOsc.connect(blipGain);
        blipGain.connect(ctx.destination);

        this._playNoiseBurst(ctx, t, duration * 0.5, 750, 3.5, 0.16 * intensity);

        osc.start(t);
        lfo.start(t);
        blipOsc.start(t);

        osc.stop(t + duration);
        lfo.stop(t + duration);
        blipOsc.stop(t + 0.08);

      } else if (crew === 'pig') {
        // === PIG: Comedic snorty oink with pitch scoop and nasal formant ===
        const duration = 0.28 * intensity;

        const osc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        // Characteristic oink pitch scoop: starts mid, scoops up, then drops down!
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(170, t);
        osc.frequency.exponentialRampToValueAtTime(320, t + 0.07);
        osc.frequency.exponentialRampToValueAtTime(120, t + duration);

        // Nasal snort raspy vibrato
        lfo.type = 'triangle';
        lfo.frequency.setValueAtTime(24, t);
        lfoGain.gain.setValueAtTime(42, t);
        lfoGain.gain.linearRampToValueAtTime(10, t + duration);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        // Snout nasal cavity resonance
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(950, t);
        filter.frequency.linearRampToValueAtTime(1450, t + 0.07);
        filter.frequency.exponentialRampToValueAtTime(420, t + duration);
        filter.Q.setValueAtTime(6.0, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.52 * intensity, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        // Squeak release chirp
        const squeak = ctx.createOscillator();
        const squeakGain = ctx.createGain();
        squeak.type = 'sine';
        squeak.frequency.setValueAtTime(390, t + duration * 0.4);
        squeak.frequency.exponentialRampToValueAtTime(640, t + duration * 0.75);
        squeakGain.gain.setValueAtTime(0.01, t + duration * 0.4);
        squeakGain.gain.linearRampToValueAtTime(0.2 * intensity, t + duration * 0.5);
        squeakGain.gain.exponentialRampToValueAtTime(0.001, t + duration * 0.8);
        squeak.connect(squeakGain);
        squeakGain.connect(ctx.destination);

        this._playNoiseBurst(ctx, t, duration * 0.55, 520, 2.5, 0.18 * intensity);

        osc.start(t);
        lfo.start(t);
        squeak.start(t + duration * 0.4);

        osc.stop(t + duration);
        lfo.stop(t + duration);
        squeak.stop(t + duration * 0.85);

      } else if (crew === 'penguin') {
        // === PENGUIN: Cute cartoon brake whistle / toot with squeak slide ===
        const duration = 0.22 * intensity;

        // Primary whistle tone
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(580, t);
        osc1.frequency.exponentialRampToValueAtTime(320, t + duration);

        // 2nd harmonic for cartoon pipe/tooter character
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(1160, t);
        osc2.frequency.exponentialRampToValueAtTime(640, t + duration);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1050, t);
        filter.frequency.exponentialRampToValueAtTime(520, t + duration);
        filter.Q.setValueAtTime(2.8, t);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.45 * intensity, t + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(t);
        osc2.start(t);
        osc1.stop(t + duration);
        osc2.stop(t + duration);
      }
    } catch {
      // Audio fallback
    }

    this.vibrate(Math.round(22 + clampedCharge * 45));
  },

  // Helper method for white noise air burst
  _playNoiseBurst(ctx, t, duration, centerFreq, qVal, volume) {
    try {
      const bufferSize = Math.max(256, Math.floor(ctx.sampleRate * duration));
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(centerFreq, t);
      filter.Q.setValueAtTime(qVal, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(volume, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(t);
      noise.stop(t + duration);
    } catch {
      // Audio fallback
    }
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
