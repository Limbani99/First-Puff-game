import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2, VolumeX, Smartphone, RotateCcw, Info } from 'lucide-react';
import { useGame } from '../context/GameContext';
import { soundManager } from '../game/sound';

export default function Settings() {
  const navigate = useNavigate();
  const { settings, updateSettings, resetProgress } = useGame();
  const [confirmReset, setConfirmReset] = useState(false);

  const handleBack = () => {
    soundManager.playClick();
    navigate('/home');
  };

  const toggleSound = () => {
    soundManager.playClick();
    updateSettings({ sound: !settings.sound });
  };

  const toggleVibration = () => {
    soundManager.playClick();
    updateSettings({ vibration: !settings.vibration });
  };

  const handleReset = () => {
    soundManager.playBump();
    resetProgress();
    setConfirmReset(false);
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-900 text-white select-none overflow-hidden">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 py-4 bg-sky-950 border-b border-sky-800/50 shadow-md z-10">
        <button
          onClick={handleBack}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-white flex items-center justify-center border border-white/10 transition-transform"
          aria-label="Back to Home"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-xl font-black text-amber-300 uppercase tracking-wide">
          Settings
        </h1>

        <div className="w-10" />
      </div>

      {/* Settings Options */}
      <div 
        className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4"
        style={{ paddingBottom: 'max(5.5rem, calc(env(safe-area-inset-bottom, 0px) + 4.5rem))' }}
      >
        {/* Audio Toggle */}
        <div className="bg-slate-800/70 rounded-2xl p-4 border border-white/10 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              {settings.sound ? <Volume2 size={22} /> : <VolumeX size={22} />}
            </div>
            <div>
              <p className="font-extrabold text-sm text-white">Sound Effects</p>
              <p className="text-xs text-slate-400">Cartoon puffs, bonks & jingles</p>
            </div>
          </div>

          <button
            onClick={toggleSound}
            className={`w-14 h-8 rounded-full p-1 transition-colors ${
              settings.sound ? 'bg-emerald-500' : 'bg-slate-700'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white transition-transform ${
                settings.sound ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Vibration Toggle */}
        <div className="bg-slate-800/70 rounded-2xl p-4 border border-white/10 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Smartphone size={22} />
            </div>
            <div>
              <p className="font-extrabold text-sm text-white">Haptic Vibration</p>
              <p className="text-xs text-slate-400">Brief pulse on every puff</p>
            </div>
          </div>

          <button
            onClick={toggleVibration}
            className={`w-14 h-8 rounded-full p-1 transition-colors ${
              settings.vibration ? 'bg-emerald-500' : 'bg-slate-700'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white transition-transform ${
                settings.vibration ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Reset Progress Section */}
        <div className="bg-slate-800/70 rounded-2xl p-4 border border-white/10 flex flex-col gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <RotateCcw size={22} />
            </div>
            <div>
              <p className="font-extrabold text-sm text-white">Reset Progress</p>
              <p className="text-xs text-slate-400">Clear all stars & best times</p>
            </div>
          </div>

          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="w-full py-2.5 rounded-xl bg-rose-600/30 hover:bg-rose-600/50 text-rose-200 border border-rose-500/30 font-bold text-xs uppercase tracking-wider transition-colors active:scale-95"
            >
              Reset All Saved Data
            </button>
          ) : (
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase shadow transition-colors active:scale-95"
              >
                Yes, Reset Everything
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-extrabold text-xs uppercase transition-colors active:scale-95"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* About & Crew Guide */}
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-white/10 text-xs text-slate-300 space-y-2.5 shadow-md">
          <div className="flex items-center gap-2 text-sky-400 font-black">
            <Info size={16} />
            <span>HOW TO PLAY</span>
          </div>
          <p>
            <strong>🦛 Hippo:</strong> Sits in the back, pushes raft <em>forward</em>.
          </p>
          <p>
            <strong>🐧 Penguin:</strong> Sits in front, acts as a <em>brake</em>.
          </p>
          <p>
            <strong>🐸 Frog:</strong> Sits on the left, pushes raft <em>right</em>.
          </p>
          <p>
            <strong>🐷 Pig:</strong> Sits on the right, pushes raft <em>left</em>.
          </p>
          <p className="pt-2 text-slate-400 border-t border-white/10 text-[11px]">
            Hold buttons down to charge up a mighty puff! Release two buttons together for diagonal maneuvers.
          </p>
        </div>
      </div>
    </div>
  );
}
