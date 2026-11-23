import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, RotateCcw, Grid, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { LEVELS, CREW_MEMBERS } from '../data/levels';
import { useGame } from '../context/GameContext';
import { soundManager } from '../game/sound';
import { createRaftState, updatePhysics, applyPuffImpulse, ParticleSystem } from '../game/physics';
import { resolveCollisions, checkFinish } from '../game/collision';
import { renderGame } from '../game/gameLoop';
import HUD from '../component/HUD';
import HintBanner from '../component/HintBanner';
import CrewButton from '../component/CrewButton';
import StarRating from '../component/StarRating';

export default function Game() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { completeLevel } = useGame();

  const levelId = Number(id) || 1;
  const currentLevel = LEVELS.find((lvl) => lvl.id === levelId) || LEVELS[0];

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [bumps, setBumps] = useState(0);
  const [earnedStars, setEarnedStars] = useState(1);

  // Mutable game state held in refs for 60fps loop performance
  const raftRef = useRef(createRaftState(currentLevel.world.startX, currentLevel.world.startY));
  // Deep clone obstacles so moving logs start fresh
  const worldRef = useRef(JSON.parse(JSON.stringify(currentLevel.world)));
  const particlesRef = useRef(new ParticleSystem());
  const cameraYRef = useRef(currentLevel.world.startY - 350);
  const shakeRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const timerRunningRef = useRef(true);
  const totalElapsedRef = useRef(0);
  const animFrameRef = useRef(null);

  // Initialize or restart level
  const resetGame = useCallback(() => {
    raftRef.current = createRaftState(currentLevel.world.startX, currentLevel.world.startY);
    worldRef.current = JSON.parse(JSON.stringify(currentLevel.world));
    particlesRef.current = new ParticleSystem();
    cameraYRef.current = currentLevel.world.startY - 350;
    shakeRef.current = 0;
    lastTimeRef.current = performance.now();
    totalElapsedRef.current = 0;
    timerRunningRef.current = true;

    setElapsedTime(0);
    setBumps(0);
    setIsPaused(false);
    setIsCompleted(false);
    setIsGameOver(false);
  }, [currentLevel]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  // Handle Crew Puff action
  const handlePuff = (crewId, charge) => {
    if (!timerRunningRef.current || isCompleted || isPaused || isGameOver) return;

    const raft = raftRef.current;
    const puffData = applyPuffImpulse(raft, crewId, charge);

    // Play synthesized cartoon sound
    soundManager.playPuff(crewId, charge);

    // Spawn puff particles
    particlesRef.current.spawnPuff(
      puffData.originX,
      puffData.originY,
      puffData.dirX,
      puffData.dirY,
      crewId,
      charge
    );

    // Spawn water ripple around raft
    particlesRef.current.spawnRipple(raft.x, raft.y, raft.radius);
  };

  // Main 60fps Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const loop = (now) => {
      const dt = Math.min(0.1, (now - lastTimeRef.current) / 1000);
      lastTimeRef.current = now;

      const raft = raftRef.current;
      const world = worldRef.current;
      const particles = particlesRef.current;

      if (timerRunningRef.current && !isPaused && !isCompleted && !isGameOver) {
        // Accumulate time
        totalElapsedRef.current += dt;
        setElapsedTime(totalElapsedRef.current);

        // Update physics
        updatePhysics(raft, world, dt);

        // Resolve collisions
        resolveCollisions(raft, world, () => {
          soundManager.playBump();
          shakeRef.current = 1.0;
          setBumps(raft.bumps);

          // 10 Collisions Trigger Game Over Screen
          if (raft.bumps >= 10) {
            timerRunningRef.current = false;
            setIsGameOver(true);
            soundManager.playGameOver();
          }
        });

        // Periodic small water ripples when moving
        const speed = Math.hypot(raft.vx, raft.vy);
        if (speed > 1.2 && Math.random() < 0.25) {
          particles.spawnRipple(raft.x, raft.y + 10, 16);
        }

        // Check level completion
        if (checkFinish(raft, world)) {
          timerRunningRef.current = false;
          setIsCompleted(true);

          const finalTime = totalElapsedRef.current;
          const stars = completeLevel(currentLevel.id, finalTime, raft.bumps, currentLevel.targetTime);
          setEarnedStars(stars);

          soundManager.playWin();
          particles.spawnConfetti(raft.x, raft.y);
        }
      }

      // Update particles
      particles.update(dt);

      // Decay screen shake
      if (shakeRef.current > 0) {
        shakeRef.current = Math.max(0, shakeRef.current - dt * 4.5);
      }

      // Smooth camera follow on Y axis
      const targetCameraY = raft.y - canvas.height * 0.62;
      cameraYRef.current += (targetCameraY - cameraYRef.current) * Math.min(1, dt * 6.5);

      // Clamp camera so it never goes off world bounds
      const minCamY = -30;
      const maxCamY = Math.max(0, world.height - canvas.height + 40);
      cameraYRef.current = Math.max(minCamY, Math.min(maxCamY, cameraYRef.current));

      // Render frame
      renderGame(
        ctx,
        canvas.width,
        canvas.height,
        world,
        raft,
        particles,
        cameraYRef.current,
        currentLevel.crewUnlocked,
        shakeRef.current
      );

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [currentLevel, isPaused, isCompleted, completeLevel]);

  // Adjust canvas size to fit container dynamically
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current && canvasRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        canvasRef.current.width = clientWidth || 360;
        canvasRef.current.height = clientHeight || 740;
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handlePause = () => {
    if (isGameOver || isCompleted) return;
    setIsPaused(true);
  };

  const handleResume = () => {
    soundManager.playClick();
    lastTimeRef.current = performance.now();
    setIsPaused(false);
  };

  const handleRestart = () => {
    soundManager.playClick();
    setIsGameOver(false);
    resetGame();
  };

  const handleResumeGameOver = () => {
    soundManager.playClick();
    setIsGameOver(false);
    // Reset collisions so player can continue their run
    raftRef.current.bumps = 0;
    setBumps(0);
    // 1-second invulnerability cushion so raft doesn't immediately re-collide
    raftRef.current.lastBumpTime = performance.now() + 1000;
    raftRef.current.vx *= 0.2;
    raftRef.current.vy *= 0.2;
    lastTimeRef.current = performance.now();
    timerRunningRef.current = true;
  };

  const handleNextLevel = () => {
    soundManager.playClick();
    if (currentLevel.id < LEVELS.length) {
      navigate(`/play/${currentLevel.id + 1}`);
    } else {
      navigate('/levels');
    }
  };

  const handleLevelSelect = () => {
    soundManager.playClick();
    navigate('/levels');
  };

  const handleHome = () => {
    soundManager.playClick();
    navigate('/home');
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col bg-slate-950 overflow-hidden select-none"
    >
      {/* HUD Header */}
      <HUD
        level={currentLevel}
        elapsedTime={elapsedTime}
        bumps={bumps}
        onPause={handlePause}
      />

      {/* Hint Banner (slides in for 3.5s at start) */}
      <HintBanner hint={currentLevel.hint} />

      {/* Game Canvas Viewport */}
      <canvas
        ref={canvasRef}
        className="w-full h-full flex-1 touch-none block"
      />

      {/* Thumb Controls Zone Overlay (Lifted safely above mobile OS navigation bar) */}
      <div 
        className="absolute left-0 right-0 px-3 flex items-end justify-between pointer-events-none z-20"
        style={{ bottom: 'max(4.25rem, calc(env(safe-area-inset-bottom, 0px) + 3.75rem))' }}
      >
        {/* Left Thumb Controls: Steering (Frog = Right, Pig = Left) */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Pig (Starboard: Pushes Left) */}
          <CrewButton
            crew={CREW_MEMBERS.pig}
            isUnlocked={currentLevel.crewUnlocked.includes('pig')}
            onPuff={handlePuff}
            disabled={isPaused || isCompleted || isGameOver}
          />

          {/* Frog (Port: Pushes Right) */}
          <CrewButton
            crew={CREW_MEMBERS.frog}
            isUnlocked={currentLevel.crewUnlocked.includes('frog')}
            onPuff={handlePuff}
            disabled={isPaused || isCompleted || isGameOver}
          />
        </div>

        {/* Right Thumb Controls: Acceleration (Hippo = Forward, Penguin = Brake) */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Penguin (Bow: Brake / Backward) */}
          <CrewButton
            crew={CREW_MEMBERS.penguin}
            isUnlocked={currentLevel.crewUnlocked.includes('penguin')}
            onPuff={handlePuff}
            disabled={isPaused || isCompleted || isGameOver}
          />

          {/* Hippo (Stern: Pushes Forward) */}
          <CrewButton
            crew={CREW_MEMBERS.hippo}
            isUnlocked={currentLevel.crewUnlocked.includes('hippo')}
            onPuff={handlePuff}
            disabled={isPaused || isCompleted || isGameOver}
          />
        </div>
      </div>

      {/* GAME OVER MODAL (Triggers when player collides with obstacles 10 times) */}
      {isGameOver && (
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fadeIn select-none">
          <div className="w-full max-w-[320px] bg-gradient-to-b from-rose-950 via-slate-900 to-sky-950 border-2 border-rose-500/70 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-3 text-white text-center">
            <span className="text-5xl animate-bounce">💥</span>
            <h2 className="text-3xl font-black text-rose-400 uppercase tracking-wider drop-shadow-md">
              Game Over
            </h2>
            <p className="text-xs font-bold text-slate-300">
              You collided with obstacles <span className="text-rose-400 font-extrabold">10 times</span>! Your raft sustained too much damage.
            </p>

            {/* Quick stats snapshot */}
            <div className="w-full bg-slate-900/80 rounded-2xl p-3 border border-white/10 flex items-center justify-around text-xs my-1">
              <div className="flex flex-col items-center">
                <span className="text-slate-400 font-bold">⏱️ Time</span>
                <span className="font-mono font-black text-amber-300 text-sm">
                  {elapsedTime.toFixed(1)}s
                </span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-slate-400 font-bold">💥 Collisions</span>
                <span className="font-mono font-black text-rose-400 text-sm">
                  10 / 10
                </span>
              </div>
            </div>

            {/* Action Buttons: Resume and Restart */}
            <div className="w-full flex flex-col gap-2.5 mt-2">
              <button
                onClick={handleResumeGameOver}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:brightness-110 active:scale-95 text-white font-black text-base uppercase shadow-lg flex items-center justify-center gap-2 border border-white/30 transition-transform"
              >
                <Play fill="white" size={18} />
                Resume
              </button>

              <button
                onClick={handleRestart}
                className="w-full py-3 px-4 rounded-2xl bg-sky-800 hover:bg-sky-700 active:scale-95 text-white font-extrabold text-sm uppercase shadow flex items-center justify-center gap-2 border border-white/15 transition-transform"
              >
                <RotateCcw size={18} />
                Restart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAUSE MODAL */}
      {isPaused && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 z-40">
          <div className="w-full max-w-[300px] bg-sky-900 border-2 border-sky-400/50 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4 text-white">
            <h2 className="text-2xl font-black text-amber-300 uppercase tracking-wider">
              Game Paused
            </h2>

            <div className="w-full flex flex-col gap-3 mt-2">
              <button
                onClick={handleResume}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 font-black text-sm uppercase shadow-lg flex items-center justify-center gap-2 transition-transform"
              >
                <Play fill="white" size={18} />
                Resume
              </button>

              <button
                onClick={handleRestart}
                className="w-full py-3 px-4 rounded-2xl bg-sky-700 hover:bg-sky-600 active:scale-95 font-extrabold text-sm uppercase shadow flex items-center justify-center gap-2 transition-transform"
              >
                <RotateCcw size={18} />
                Restart
              </button>

              <button
                onClick={handleLevelSelect}
                className="w-full py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-700 active:scale-95 font-extrabold text-sm uppercase shadow flex items-center justify-center gap-2 transition-transform"
              >
                <Grid size={18} />
                Level Select
              </button>

              <button
                onClick={handleHome}
                className="w-full py-2.5 px-4 rounded-2xl bg-transparent hover:bg-white/10 active:scale-95 font-bold text-xs uppercase text-slate-300 flex items-center justify-center gap-1.5 transition-transform"
              >
                <HomeIcon size={16} />
                Main Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEVEL COMPLETE MODAL */}
      {isCompleted && (
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-fadeIn">
          <div className="w-full max-w-[320px] bg-gradient-to-b from-sky-900 to-sky-950 border-2 border-yellow-400/70 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-3 text-white">
            <span className="text-4xl animate-bounce">🏆</span>
            <h2 className="text-2xl font-black text-amber-300 uppercase tracking-wide">
              Level Complete!
            </h2>
            <p className="text-xs font-bold text-sky-200 -mt-2">
              {currentLevel.name}
            </p>

            {/* Stars animation */}
            <div className="my-2">
              <StarRating stars={earnedStars} size="lg" animated={true} />
            </div>

            {/* Performance Stats Breakdown */}
            <div className="w-full bg-slate-900/70 rounded-2xl p-3 border border-white/10 flex flex-col gap-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-bold">⏱️ Time:</span>
                <span
                  className={`font-mono font-black ${
                    elapsedTime <= currentLevel.targetTime
                      ? 'text-emerald-400'
                      : 'text-amber-400'
                  }`}
                >
                  {elapsedTime.toFixed(1)}s{' '}
                  <span className="text-[10px] text-slate-400 font-normal">
                    (Target: {currentLevel.targetTime}s)
                  </span>
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-bold">💥 Bumps:</span>
                <span
                  className={`font-mono font-black ${
                    bumps <= 2 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {bumps}{' '}
                  <span className="text-[10px] text-slate-400 font-normal">
                    (Limit: ≤ 2)
                  </span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2.5 mt-2">
              {currentLevel.id < LEVELS.length ? (
                <button
                  onClick={handleNextLevel}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 hover:brightness-110 active:scale-95 font-black text-sm uppercase shadow-lg flex items-center justify-center gap-2 border border-white/40 transition-transform"
                >
                  <span>Next Level</span>
                  <ChevronRight size={18} />
                </button>
              ) : (
                <div className="p-2 text-center text-xs font-black text-yellow-300 bg-yellow-950/40 rounded-xl border border-yellow-500/30">
                  🎉 Congratulations! You completed all {LEVELS.length} levels!
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRestart}
                  className="flex-1 py-3 px-3 rounded-2xl bg-sky-800 hover:bg-sky-700 active:scale-95 font-extrabold text-xs uppercase shadow flex items-center justify-center gap-1.5 transition-transform"
                >
                  <RotateCcw size={15} />
                  Retry
                </button>

                <button
                  onClick={handleLevelSelect}
                  className="flex-1 py-3 px-3 rounded-2xl bg-slate-800 hover:bg-slate-700 active:scale-95 font-extrabold text-xs uppercase shadow flex items-center justify-center gap-1.5 transition-transform"
                >
                  <Grid size={15} />
                  Levels
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
