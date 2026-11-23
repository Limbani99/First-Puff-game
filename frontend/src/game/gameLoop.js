// High-performance Canvas 2D game loop and cartoon river renderer for First Puff

import { getRiverBounds } from './collision';

// Floating leaves on water
const DECORATIVE_LEAVES = [
  { yRatio: 0.15, offset: -40, size: 8, angle: 0.3 },
  { yRatio: 0.32, offset: 60, size: 9, angle: 1.1 },
  { yRatio: 0.55, offset: -70, size: 7, angle: 2.4 },
  { yRatio: 0.72, offset: 50, size: 9, angle: 0.8 },
  { yRatio: 0.88, offset: -30, size: 8, angle: 1.9 }
];

export function renderGame(ctx, canvasWidth, canvasHeight, world, raft, particleSystem, cameraY, unlockedCrew = [], shake = 0) {
  ctx.save();

  // Screen shake on bump
  if (shake > 0) {
    const ox = (Math.random() - 0.5) * 10 * shake;
    const oy = (Math.random() - 0.5) * 10 * shake;
    ctx.translate(ox, oy);
  }

  // 1. Draw River Grasslands Background
  ctx.fillStyle = '#34d399'; // lush cartoon green bank
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Apply camera translation for world coordinates
  ctx.save();
  ctx.translate(0, -cameraY);

  // 2. Draw River Banks and Water Body
  drawRiver(ctx, world, canvasWidth, cameraY, canvasHeight);

  // 3. Floating leaves
  drawLeaves(ctx, world, cameraY, canvasHeight);

  // 4. Finish Zone & Flag
  drawFinishZone(ctx, world);

  // 5. Draw Obstacles (Rocks, Logs, Gates)
  drawObstacles(ctx, world, cameraY, canvasHeight);

  // 6. Draw Particles (water ripples, puff clouds)
  particleSystem.draw(ctx, cameraY, canvasHeight);

  // 7. Draw the Raft and Crew
  drawRaft(ctx, raft, unlockedCrew);

  ctx.restore();
  ctx.restore();
}

function drawRiver(ctx, world, canvasWidth, cameraY, canvasHeight) {
  const waypoints = world.waypoints || [
    { y: world.height, cx: 180, width: 260 },
    { y: 0, cx: 180, width: 260 }
  ];

  const step = 20;
  const startY = Math.max(0, Math.floor((cameraY - 40) / step) * step);
  const endY = Math.min(world.height, Math.ceil((cameraY + canvasHeight + 40) / step) * step);

  // Generate left & right bank boundary points
  const leftPoints = [];
  const rightPoints = [];

  for (let y = startY; y <= endY; y += step) {
    const b = getRiverBounds(waypoints, y);
    leftPoints.push({ x: b.leftBank, y });
    rightPoints.push({ x: b.rightBank, y });
  }

  if (leftPoints.length < 2) return;

  // Sandy shore border (left)
  ctx.beginPath();
  ctx.moveTo(leftPoints[0].x - 8, leftPoints[0].y);
  for (let i = 1; i < leftPoints.length; i++) {
    ctx.lineTo(leftPoints[i].x - 8, leftPoints[i].y);
  }
  for (let i = rightPoints.length - 1; i >= 0; i--) {
    ctx.lineTo(rightPoints[i].x + 8, rightPoints[i].y);
  }
  ctx.closePath();
  ctx.fillStyle = '#fde68a'; // Sand color
  ctx.fill();

  // River water polygon
  ctx.beginPath();
  ctx.moveTo(leftPoints[0].x, leftPoints[0].y);
  for (let i = 1; i < leftPoints.length; i++) {
    ctx.lineTo(leftPoints[i].x, leftPoints[i].y);
  }
  for (let i = rightPoints.length - 1; i >= 0; i--) {
    ctx.lineTo(rightPoints[i].x, rightPoints[i].y);
  }
  ctx.closePath();

  // Water gradient
  const waterGradient = ctx.createLinearGradient(0, startY, 0, endY);
  waterGradient.addColorStop(0, '#38bdf8');
  waterGradient.addColorStop(0.5, '#0ea5e9');
  waterGradient.addColorStop(1, '#0284c7');
  ctx.fillStyle = waterGradient;
  ctx.fill();

  // Subtle water flow lines
  const time = performance.now() * 0.0015;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.lineWidth = 2.5;

  for (let y = startY; y <= endY; y += 60) {
    const b = getRiverBounds(waypoints, y);
    const waveOffset = Math.sin(time + y * 0.04) * 14;
    ctx.beginPath();
    ctx.moveTo(b.cx - 40 + waveOffset, y);
    ctx.quadraticCurveTo(b.cx + waveOffset, y + 4, b.cx + 40 + waveOffset, y);
    ctx.stroke();
  }
}

function drawLeaves(ctx, world, cameraY, canvasHeight) {
  const time = performance.now() * 0.001;
  for (let i = 0; i < DECORATIVE_LEAVES.length; i++) {
    const leaf = DECORATIVE_LEAVES[i];
    const y = world.height * leaf.yRatio;
    if (y < cameraY - 40 || y > cameraY + canvasHeight + 40) continue;

    const bounds = getRiverBounds(world.waypoints, y);
    const x = bounds.cx + leaf.offset + Math.sin(time + i) * 8;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(leaf.angle + Math.sin(time * 0.8 + i) * 0.2);

    // Cute green lily pad / leaf
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(0, 0, leaf.size, 0.2, Math.PI * 1.8);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}

function drawFinishZone(ctx, world) {
  const fx = world.finishX;
  const fy = world.finishY;
  const r = world.finishRadius || 46;

  // Pulsing finish pond ring
  const pulse = Math.sin(performance.now() * 0.005) * 4;
  ctx.save();

  // Glowing finish zone circle
  const grad = ctx.createRadialGradient(fx, fy, r * 0.2, fx, fy, r + pulse);
  grad.addColorStop(0, 'rgba(253, 224, 71, 0.45)');
  grad.addColorStop(0.7, 'rgba(250, 204, 21, 0.25)');
  grad.addColorStop(1, 'rgba(234, 179, 8, 0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(fx, fy, r + pulse, 0, Math.PI * 2);
  ctx.fill();

  // Chequered buoy perimeter
  ctx.setLineDash([8, 8]);
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(fx, fy, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Checkered Finish Flag
  const flagX = fx - 4;
  const flagY = fy - 26;

  // Flag pole
  ctx.strokeStyle = '#475569';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(flagX, flagY + 28);
  ctx.lineTo(flagX, flagY);
  ctx.stroke();

  // Gold ball top
  ctx.fillStyle = '#fbbf24';
  ctx.beginPath();
  ctx.arc(flagX, flagY, 4, 0, Math.PI * 2);
  ctx.fill();

  // Checkered banner
  const wave = Math.sin(performance.now() * 0.008) * 3;
  ctx.fillStyle = '#ef4444'; // Red-orange finish banner
  ctx.beginPath();
  ctx.moveTo(flagX, flagY + 2);
  ctx.lineTo(flagX + 24 + wave, flagY + 8);
  ctx.lineTo(flagX + 24 + wave, flagY + 20);
  ctx.lineTo(flagX, flagY + 14);
  ctx.closePath();
  ctx.fill();

  // White checker square
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(flagX + 3, flagY + 4, 7, 5);
  ctx.fillRect(flagX + 13, flagY + 10, 7, 5);

  ctx.restore();
}

function drawObstacles(ctx, world, cameraY, canvasHeight) {
  if (!world.obstacles) return;

  for (const obs of world.obstacles) {
    if (obs.type === 'rock') {
      if (obs.y < cameraY - 50 || obs.y > cameraY + canvasHeight + 50) continue;

      ctx.save();
      // Rock shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.beginPath();
      ctx.ellipse(obs.x + 3, obs.y + 4, obs.radius * 1.05, obs.radius * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Rock body
      const rockGrad = ctx.createRadialGradient(
        obs.x - obs.radius * 0.3,
        obs.y - obs.radius * 0.3,
        obs.radius * 0.1,
        obs.x,
        obs.y,
        obs.radius
      );
      rockGrad.addColorStop(0, '#94a3b8');
      rockGrad.addColorStop(0.7, '#64748b');
      rockGrad.addColorStop(1, '#475569');

      ctx.fillStyle = rockGrad;
      ctx.beginPath();
      ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
      ctx.fill();

      // Rock highlight
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(obs.x - obs.radius * 0.3, obs.y - obs.radius * 0.3, obs.radius * 0.45, Math.PI * 0.8, Math.PI * 1.7);
      ctx.stroke();

      // Moss patch
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(obs.x + obs.radius * 0.35, obs.y - obs.radius * 0.2, obs.radius * 0.32, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    } else if (obs.type === 'log') {
      if (obs.y < cameraY - 50 || obs.y > cameraY + canvasHeight + 50) continue;

      ctx.save();
      const halfW = obs.width / 2;
      const halfH = obs.height / 2;

      // Log shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.beginPath();
      ctx.roundRect(obs.x - halfW + 3, obs.y - halfH + 4, obs.width, obs.height, halfH);
      ctx.fill();

      // Log body
      const logGrad = ctx.createLinearGradient(obs.x - halfW, obs.y, obs.x + halfW, obs.y);
      logGrad.addColorStop(0, '#854d0e');
      logGrad.addColorStop(0.5, '#a16207');
      logGrad.addColorStop(1, '#713f12');

      ctx.fillStyle = logGrad;
      ctx.beginPath();
      ctx.roundRect(obs.x - halfW, obs.y - halfH, obs.width, obs.height, halfH);
      ctx.fill();

      // Bark lines
      ctx.strokeStyle = '#ca8a04';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(obs.x - halfW + 15, obs.y - 3);
      ctx.lineTo(obs.x + halfW - 15, obs.y - 3);
      ctx.stroke();

      // Moss on log
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(obs.x - halfW * 0.3, obs.y - halfH * 0.6, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    } else if (obs.type === 'gate') {
      if (obs.y < cameraY - 50 || obs.y > cameraY + canvasHeight + 50) continue;

      ctx.save();
      const posts = [obs.leftX, obs.rightX];

      for (const px of posts) {
        // Post shadow
        ctx.fillStyle = 'rgba(15, 23, 42, 0.3)';
        ctx.beginPath();
        ctx.ellipse(px + 3, obs.y + 4, obs.postRadius, obs.postRadius * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        // Wooden gate post
        ctx.fillStyle = '#b45309';
        ctx.beginPath();
        ctx.arc(px, obs.y, obs.postRadius, 0, Math.PI * 2);
        ctx.fill();

        // Post top ring
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(px, obs.y, obs.postRadius * 0.65, 0, Math.PI * 2);
        ctx.stroke();

        // Little red flag on top of post
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.moveTo(px, obs.y - obs.postRadius);
        ctx.lineTo(px + 14, obs.y - obs.postRadius - 6);
        ctx.lineTo(px, obs.y - obs.postRadius - 12);
        ctx.closePath();
        ctx.fill();
      }

      // Floating pennant banner string connecting the posts
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(obs.leftX, obs.y);
      ctx.quadraticCurveTo((obs.leftX + obs.rightX) / 2, obs.y + 12, obs.rightX, obs.y);
      ctx.stroke();

      ctx.restore();
    }
  }
}

// Draw Raft and Cute Animal Crew
function drawRaft(ctx, raft, unlockedCrew = []) {
  ctx.save();
  ctx.translate(raft.x, raft.y);
  ctx.rotate(raft.angle);

  const r = raft.radius;

  // 1. Water ripple under raft
  ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.beginPath();
  ctx.ellipse(0, 4, r * 1.25, r * 1.05, 0, 0, Math.PI * 2);
  ctx.fill();

  // 2. Raft Shadow
  ctx.fillStyle = 'rgba(15, 23, 42, 0.3)';
  ctx.beginPath();
  ctx.ellipse(2, 6, r * 1.15, r * 0.95, 0, 0, Math.PI * 2);
  ctx.fill();

  // 3. Wooden Raft Planks (4 logs bound together)
  const plankWidth = (r * 2.1) / 4;
  const plankHeight = r * 2.3;
  const startPx = -r * 1.05;

  for (let i = 0; i < 4; i++) {
    const px = startPx + i * plankWidth;
    const py = -plankHeight / 2;

    // Plank body
    const logGrad = ctx.createLinearGradient(px, py, px + plankWidth, py);
    logGrad.addColorStop(0, '#78350f');
    logGrad.addColorStop(0.3, '#92400e');
    logGrad.addColorStop(0.7, '#b45309');
    logGrad.addColorStop(1, '#78350f');

    ctx.fillStyle = logGrad;
    ctx.beginPath();
    ctx.roundRect(px + 1, py, plankWidth - 2, plankHeight, 5);
    ctx.fill();

    // Wood grain lines
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px + plankWidth * 0.5, py + 4);
    ctx.lineTo(px + plankWidth * 0.5, py + plankHeight - 4);
    ctx.stroke();
  }

  // Crossbeams (tied support logs top and bottom)
  ctx.fillStyle = '#5c2b09';
  ctx.fillRect(-r * 1.1, -plankHeight * 0.35, r * 2.2, 5);
  ctx.fillRect(-r * 1.1, plankHeight * 0.35, r * 2.2, 5);

  // Rope bindings
  ctx.strokeStyle = '#fef08a';
  ctx.lineWidth = 2;
  const ropeX = [-r * 0.7, -r * 0.2, r * 0.2, r * 0.7];
  for (const rx of ropeX) {
    ctx.beginPath();
    ctx.moveTo(rx, -plankHeight * 0.38);
    ctx.lineTo(rx, -plankHeight * 0.32);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(rx, plankHeight * 0.32);
    ctx.lineTo(rx, plankHeight * 0.38);
    ctx.stroke();
  }

  // 4. Crew Members on Raft
  // 🦛 Hippo: Back (y > 0)
  // 🐧 Penguin: Front (y < 0)
  // 🐸 Frog: Left (x < 0)
  // 🐷 Pig: Right (x > 0)

  // Hippo (Back)
  if (unlockedCrew.includes('hippo')) {
    drawCrewAnimal(ctx, 'hippo', 0, r * 0.52, raft.activePuffCrew === 'hippo');
  }

  // Penguin (Front / Brake)
  if (unlockedCrew.includes('penguin')) {
    drawCrewAnimal(ctx, 'penguin', 0, -r * 0.52, raft.activePuffCrew === 'penguin');
  }

  // Frog (Left side)
  if (unlockedCrew.includes('frog')) {
    drawCrewAnimal(ctx, 'frog', -r * 0.52, 0, raft.activePuffCrew === 'frog');
  }

  // Pig (Right side)
  if (unlockedCrew.includes('pig')) {
    drawCrewAnimal(ctx, 'pig', r * 0.52, 0, raft.activePuffCrew === 'pig');
  }

  ctx.restore();
}

/**
 * High-definition Canvas 2D Cartoon Animal Vector Renderer
 * Replaces blurry emoji text with crisp, animated cartoon character faces
 */
function drawCrewAnimal(ctx, crewId, x, y, isPuffing) {
  ctx.save();
  ctx.translate(x, y);

  if (isPuffing) {
    // Excited pop scale on puff
    ctx.scale(1.22, 1.22);
  }

  // Pedestal cushion shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.beginPath();
  ctx.ellipse(0, 5, 12, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // White pedestal cushion
  ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.beginPath();
  ctx.ellipse(0, 3, 11, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  if (crewId === 'hippo') {
    // === HIPPO: Purple Chubby Mascot ===
    if (isPuffing) {
      ctx.fillStyle = 'rgba(168, 85, 247, 0.45)';
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
    }

    // Ears
    ctx.fillStyle = '#7c3aed';
    ctx.beginPath();
    ctx.arc(-7, -7, 3.5, 0, Math.PI * 2);
    ctx.arc(7, -7, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(-7, -7, 1.8, 0, Math.PI * 2);
    ctx.arc(7, -7, 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.fillStyle = '#8b5cf6';
    ctx.beginPath();
    ctx.arc(0, -1, 9.5, 0, Math.PI * 2);
    ctx.fill();

    // Blushing cheeks
    ctx.fillStyle = 'rgba(244, 114, 182, 0.6)';
    ctx.beginPath();
    ctx.ellipse(-6.5, 0.5, 2.2, 1.5, 0, 0, Math.PI * 2);
    ctx.ellipse(6.5, 0.5, 2.2, 1.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Big Chubby Snout
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.ellipse(0, 3.5, 7.5, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(-3.2, -2.5, 2.2, 2.8, 0, 0, Math.PI * 2);
    ctx.ellipse(3.2, -2.5, 2.2, 2.8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.arc(-3.2, -2.2, 1.4, 0, Math.PI * 2);
    ctx.arc(3.2, -2.2, 1.4, 0, Math.PI * 2);
    ctx.fill();

    // Eye highlights
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-3.8, -2.8, 0.6, 0, Math.PI * 2);
    ctx.arc(2.6, -2.8, 0.6, 0, Math.PI * 2);
    ctx.fill();

    // Nostrils
    ctx.fillStyle = '#4c1d95';
    ctx.beginPath();
    ctx.ellipse(-2.5, 3.5, 1.2, 1.6, 0, 0, Math.PI * 2);
    ctx.ellipse(2.5, 3.5, 1.2, 1.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = '#4c1d95';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 5, 2, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.stroke();

  } else if (crewId === 'frog') {
    // === FROG: Emerald Green Smiling Ribbit ===
    if (isPuffing) {
      ctx.fillStyle = 'rgba(34, 197, 94, 0.45)';
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
    }

    // Bulging Eye domes on top
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(-5, -5, 4.5, 0, Math.PI * 2);
    ctx.arc(5, -5, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Head base
    ctx.fillStyle = '#16a34a';
    ctx.beginPath();
    ctx.ellipse(0, 1, 9.5, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Pale lime chin
    ctx.fillStyle = '#bef264';
    ctx.beginPath();
    ctx.ellipse(0, 3.5, 6, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eye whites
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-5, -5, 3.4, 0, Math.PI * 2);
    ctx.arc(5, -5, 3.4, 0, Math.PI * 2);
    ctx.fill();

    // Pupils
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.ellipse(-4.8, -4.8, 1.8, 2.2, 0, 0, Math.PI * 2);
    ctx.ellipse(5.2, -4.8, 1.8, 2.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eye sparkles
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-5.4, -5.5, 0.8, 0, Math.PI * 2);
    ctx.arc(4.6, -5.5, 0.8, 0, Math.PI * 2);
    ctx.fill();

    // Rosy Cheeks
    ctx.fillStyle = 'rgba(248, 113, 113, 0.55)';
    ctx.beginPath();
    ctx.arc(-6.5, 2, 2, 0, Math.PI * 2);
    ctx.arc(6.5, 2, 2, 0, Math.PI * 2);
    ctx.fill();

    // Cheerful wide mouth
    ctx.strokeStyle = '#14532d';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, 2, 4.5, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();

  } else if (crewId === 'pig') {
    // === PIG: Cute Pink Snout ===
    if (isPuffing) {
      ctx.fillStyle = 'rgba(244, 114, 182, 0.45)';
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
    }

    // Floppy ears
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.moveTo(-6, -4);
    ctx.lineTo(-10, -9);
    ctx.lineTo(-3, -8);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(6, -4);
    ctx.lineTo(10, -9);
    ctx.lineTo(3, -8);
    ctx.closePath();
    ctx.fill();

    // Inner ear
    ctx.fillStyle = '#be185d';
    ctx.beginPath();
    ctx.moveTo(-6, -5);
    ctx.lineTo(-8.5, -8);
    ctx.lineTo(-4, -7.5);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(6, -5);
    ctx.lineTo(8.5, -8);
    ctx.lineTo(4, -7.5);
    ctx.closePath();
    ctx.fill();

    // Head
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.arc(0, 0, 9.5, 0, Math.PI * 2);
    ctx.fill();

    // Rosy Cheeks
    ctx.fillStyle = 'rgba(225, 29, 72, 0.45)';
    ctx.beginPath();
    ctx.arc(-6.5, 1.5, 2, 0, Math.PI * 2);
    ctx.arc(6.5, 1.5, 2, 0, Math.PI * 2);
    ctx.fill();

    // Sparkling Eyes
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.arc(-3.5, -2, 1.6, 0, Math.PI * 2);
    ctx.arc(3.5, -2, 1.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-4, -2.5, 0.6, 0, Math.PI * 2);
    ctx.arc(3, -2.5, 0.6, 0, Math.PI * 2);
    ctx.fill();

    // Pig Snout Oval
    ctx.fillStyle = '#fb7185';
    ctx.beginPath();
    ctx.ellipse(0, 3, 5.2, 3.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Snout Nostrils
    ctx.fillStyle = '#881337';
    ctx.beginPath();
    ctx.ellipse(-1.8, 3, 1, 1.4, 0, 0, Math.PI * 2);
    ctx.ellipse(1.8, 3, 1, 1.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = '#9d174d';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 5, 2.2, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();

  } else if (crewId === 'penguin') {
    // === PENGUIN: Dapper Tuxedo Brake ===
    if (isPuffing) {
      ctx.fillStyle = 'rgba(6, 182, 212, 0.45)';
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
    }

    // Dark Tuxedo Head
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(0, 0, 9.5, 0, Math.PI * 2);
    ctx.fill();

    // White Tuxedo Face Patch
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.ellipse(-2.5, 0, 4, 6, 0, 0, Math.PI * 2);
    ctx.ellipse(2.5, 0, 4, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Rosy Cheeks
    ctx.fillStyle = 'rgba(251, 113, 133, 0.45)';
    ctx.beginPath();
    ctx.arc(-5.5, 1.5, 1.8, 0, Math.PI * 2);
    ctx.arc(5.5, 1.5, 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(-2.5, -1.2, 1.5, 0, Math.PI * 2);
    ctx.arc(2.5, -1.2, 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-2.9, -1.7, 0.6, 0, Math.PI * 2);
    ctx.arc(2.1, -1.7, 0.6, 0, Math.PI * 2);
    ctx.fill();

    // Orange Beak
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(-2.5, 1.2);
    ctx.lineTo(2.5, 1.2);
    ctx.lineTo(0, 5);
    ctx.closePath();
    ctx.fill();

    // Beak shine
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.moveTo(-1.8, 1.2);
    ctx.lineTo(1.8, 1.2);
    ctx.lineTo(0, 2.5);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}
