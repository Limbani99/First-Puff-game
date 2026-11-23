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

  // 3. Draw Animated Spectator Crowd on the Green Riverbanks
  drawCrowd(ctx, world, canvasWidth, cameraY, canvasHeight);

  // 4. Floating leaves
  drawLeaves(ctx, world, cameraY, canvasHeight);

  // 5. Finish Zone & Tea Stall
  drawFinishZone(ctx, world);
  drawTeaStall(ctx, world);

  // 6. Draw Obstacles (Stage, Logs, Gates)
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

  // River-wide finish line ribbon
  const bounds = getRiverBounds(world.waypoints, fy);
  ctx.save();
  ctx.strokeStyle = 'rgba(250, 204, 21, 0.85)';
  ctx.lineWidth = 4;
  ctx.setLineDash([12, 8]);
  ctx.beginPath();
  ctx.moveTo(bounds.leftBank + 4, fy);
  ctx.lineTo(bounds.rightBank - 4, fy);
  ctx.stroke();
  ctx.restore();

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

function fillSafeRoundRect(ctx, x, y, w, h, r = 4) {
  if (typeof ctx.roundRect === 'function') {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
    ctx.fill();
  } else {
    ctx.fillRect(x, y, w, h);
  }
}

function strokeSafeRoundRect(ctx, x, y, w, h, r = 4) {
  if (typeof ctx.roundRect === 'function') {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
    ctx.stroke();
  } else {
    ctx.strokeRect(x, y, w, h);
  }
}

/**
 * Desi Chai Ki Kitli / Tea Stall at the Finish Line
 * Authentic Gujarati roadside tea stall with wooden pier dock,
 * striped awning canopy, silver chai kettle, cutting chai glasses,
 * snack jars, festive toran buntings, and steaming animated hot tea!
 */
function drawTeaStall(ctx, world) {
  const fy = world.finishY || 130;
  // Stall Y position right at the top water's edge / dock
  const stallY = Math.max(38, Math.min(65, fy - 75));
  const bounds = getRiverBounds(world.waypoints, stallY);
  const stallX = bounds.cx;
  const time = performance.now() * 0.002;

  ctx.save();

  // 1. Wooden Pier / Dock Platform extending across the riverhead
  const dockW = Math.min(bounds.width * 0.9, 230);
  const dockH = 26;
  const dockX = stallX - dockW / 2;
  const dockY = stallY + 12;

  // Dock water reflection / shadow
  ctx.fillStyle = 'rgba(15, 23, 42, 0.35)';
  fillSafeRoundRect(ctx, dockX + 4, dockY + dockH, dockW - 8, 8, 4);

  // Wooden pilings / stilts in the water
  const stiltCount = 5;
  for (let i = 0; i < stiltCount; i++) {
    const sx = dockX + 16 + (i * (dockW - 32)) / (stiltCount - 1);
    ctx.fillStyle = '#451a03';
    ctx.fillRect(sx - 3.5, dockY + dockH - 2, 7, 14);
    // Stilt water ring / ripple
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.ellipse(sx, dockY + dockH + 12, 6, 2.5, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Wooden deck planking
  ctx.fillStyle = '#78350f'; // Dark amber wood base
  fillSafeRoundRect(ctx, dockX, dockY, dockW, dockH, 5);

  // Wood planks highlight & grain lines
  ctx.fillStyle = '#92400e';
  ctx.fillRect(dockX + 2, dockY + 2, dockW - 4, dockH - 4);

  // Individual vertical wood planks
  ctx.strokeStyle = '#451a03';
  ctx.lineWidth = 1.5;
  for (let px = dockX + 12; px < dockX + dockW - 6; px += 14) {
    ctx.beginPath();
    ctx.moveTo(px, dockY + 2);
    ctx.lineTo(px, dockY + dockH - 2);
    ctx.stroke();
  }

  // Golden edge trim
  ctx.fillStyle = '#b45309';
  ctx.fillRect(dockX, dockY + dockH - 4, dockW, 4);

  // Dock bollards / mooring posts
  ctx.fillStyle = '#3f1d0b';
  ctx.fillRect(dockX + 6, dockY - 6, 6, 12);
  ctx.fillRect(dockX + dockW - 12, dockY - 6, 6, 12);
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(dockX + 9, dockY - 6, 4, 0, Math.PI * 2);
  ctx.arc(dockX + dockW - 9, dockY - 6, 4, 0, Math.PI * 2);
  ctx.fill();

  // 2. The Tea Stall Counter & Structure
  const counterW = 124;
  const counterH = 28;
  const counterX = stallX - counterW / 2;
  const counterY = stallY - 14;

  // Counter body (warm wood)
  ctx.fillStyle = '#7c2d12';
  fillSafeRoundRect(ctx, counterX, counterY, counterW, counterH, 4);

  // Counter front panel
  ctx.fillStyle = '#9a3412';
  ctx.fillRect(counterX + 3, counterY + 3, counterW - 6, counterH - 6);

  // Signboard: "☕ DESI TEA STALL ☕"
  const signW = 104;
  const signH = 14;
  const signX = stallX - signW / 2;
  const signY = counterY + 7;
  ctx.fillStyle = '#1e1b4b'; // Blackboard
  fillSafeRoundRect(ctx, signX, signY, signW, signH, 3);
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 1.2;
  strokeSafeRoundRect(ctx, signX, signY, signW, signH, 3);

  // Sign text
  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 8.5px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('☕ DESI TEA STALL ☕', stallX, signY + signH / 2);

  // Countertop slab (smooth polished marble / zinc top)
  ctx.fillStyle = '#e2e8f0';
  fillSafeRoundRect(ctx, counterX - 4, counterY - 4, counterW + 8, 6, 2);
  ctx.fillStyle = '#94a3b8';
  ctx.fillRect(counterX - 4, counterY - 1, counterW + 8, 2);

  // 3. Wooden Canopy Poles
  const poleLeftX = counterX - 1;
  const poleRightX = counterX + counterW + 1;
  const canopyTopY = stallY - 50;
  const canopyBottomY = stallY - 26;

  ctx.strokeStyle = '#5c2207';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(poleLeftX, counterY);
  ctx.lineTo(poleLeftX, canopyBottomY);
  ctx.moveTo(poleRightX, counterY);
  ctx.lineTo(poleRightX, canopyBottomY);
  ctx.stroke();

  // 4. Striped Awning Canopy (Festive Saffron Orange & Cream White)
  const awningW = counterW + 20;
  const awningX = stallX - awningW / 2;
  const stripeWidth = awningW / 7;

  ctx.save();
  for (let i = 0; i < 7; i++) {
    const sx = awningX + i * stripeWidth;
    ctx.fillStyle = i % 2 === 0 ? '#ea580c' : '#fef08a'; // Saffron and golden cream
    ctx.beginPath();
    ctx.moveTo(sx, canopyBottomY);
    ctx.lineTo(sx + stripeWidth * 0.15, canopyTopY);
    ctx.lineTo(sx + stripeWidth * 0.85, canopyTopY);
    ctx.lineTo(sx + stripeWidth, canopyBottomY);
    ctx.closePath();
    ctx.fill();

    // Scalloped ruffle at bottom edge
    ctx.beginPath();
    ctx.arc(sx + stripeWidth / 2, canopyBottomY, stripeWidth / 2, 0, Math.PI);
    ctx.fill();
  }

  // Canopy ridge line
  ctx.strokeStyle = '#9a3412';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(awningX, canopyTopY);
  ctx.lineTo(awningX + awningW, canopyTopY);
  ctx.stroke();

  // 5. Festive Buntings (Toran) hanging under the roof
  const toranY = canopyBottomY + 4;
  const flagColors = ['#f43f5e', '#facc15', '#10b981', '#3b82f6', '#f97316'];
  for (let f = 0; f < 6; f++) {
    const fx = awningX + 8 + (f * (awningW - 16)) / 5;
    ctx.fillStyle = flagColors[f % flagColors.length];
    ctx.beginPath();
    ctx.moveTo(fx - 4, toranY);
    ctx.lineTo(fx + 4, toranY);
    ctx.lineTo(fx, toranY + 7);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // 6. Traditional Silver Chai Kitli (Tea Kettle)
  const kitliX = counterX + 22;
  const kitliY = counterY - 9;

  // Kettle body (shiny steel)
  ctx.fillStyle = '#cbd5e1';
  ctx.beginPath();
  ctx.arc(kitliX, kitliY, 7.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.arc(kitliX - 2, kitliY - 2, 3.5, 0, Math.PI * 2);
  ctx.fill();

  // Kettle Spout
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(kitliX - 6, kitliY + 2);
  ctx.quadraticCurveTo(kitliX - 12, kitliY - 2, kitliX - 10, kitliY - 8);
  ctx.stroke();

  // Kettle lid and golden knob
  ctx.fillStyle = '#64748b';
  ctx.fillRect(kitliX - 4, kitliY - 9, 8, 2);
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(kitliX, kitliY - 10, 2, 0, Math.PI * 2);
  ctx.fill();

  // Big overhead black handle
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(kitliX, kitliY - 5, 8.5, Math.PI * 1.1, Math.PI * 1.9);
  ctx.stroke();

  // 7. Animated Hot Chai Steam Curls wafting from kettle!
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  for (let s = 0; s < 3; s++) {
    const sPhase = time * 2.5 + s * 1.8;
    const sYOffset = (sPhase % 3) * 6;
    const sWave = Math.sin(sPhase * 1.5) * 3;
    const sx = kitliX - 10 + sWave;
    const sy = kitliY - 10 - sYOffset;

    ctx.globalAlpha = Math.max(0, 1 - sYOffset / 18);
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.quadraticCurveTo(sx + 3, sy - 3, sx, sy - 6);
    ctx.stroke();
  }
  ctx.restore();

  // 8. Cutting Chai Stand & Glasses
  const standX = counterX + counterW - 32;
  const standY = counterY - 6;

  // Wire cutting chai stand
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(standX - 12, standY - 1, 24, 7);

  // 3 Cutting chai glasses with hot brown tea
  const glassSpacing = 7;
  for (let g = -1; g <= 1; g++) {
    const gx = standX + g * glassSpacing;
    const gy = standY - 4;

    // Glass cup
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillRect(gx - 2.5, gy, 5, 8);

    // Brown Kadak Chai inside
    ctx.fillStyle = '#b45309';
    ctx.fillRect(gx - 2, gy + 2.5, 4, 5);

    // Cup rim
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(gx - 3, gy, 6, 1.2);
  }

  // Little steam from tea glasses
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.lineWidth = 1;
  const gWave = Math.sin(time * 3) * 2;
  ctx.beginPath();
  ctx.moveTo(standX + gWave, standY - 6);
  ctx.quadraticCurveTo(standX + 2 + gWave, standY - 10, standX + gWave, standY - 14);
  ctx.stroke();
  ctx.restore();

  // 9. Glass Snack Jars (Gathiya / Fafda & Biscuits)
  const jarX = counterX + counterW / 2 + 10;
  const jarY = counterY - 8;

  // Jar: Gathiya / Snacks (Yellow)
  ctx.fillStyle = 'rgba(241, 245, 249, 0.7)';
  ctx.fillRect(jarX - 6, jarY, 12, 10);
  ctx.fillStyle = '#eab308'; // Crunchy yellow snacks
  ctx.fillRect(jarX - 4.5, jarY + 2.5, 9, 7);
  // Red lid
  ctx.fillStyle = '#dc2626';
  ctx.fillRect(jarX - 6.5, jarY - 1.5, 13, 2.5);

  // 10. Warm Lantern Glow on Stall
  const lanternX = counterX + 5;
  const lanternY = canopyBottomY + 5;
  const glowGrad = ctx.createRadialGradient(lanternX, lanternY, 2, lanternX, lanternY, 18);
  glowGrad.addColorStop(0, 'rgba(254, 240, 138, 0.85)');
  glowGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.35)');
  glowGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
  ctx.fillStyle = glowGrad;
  ctx.beginPath();
  ctx.arc(lanternX, lanternY, 18, 0, Math.PI * 2);
  ctx.fill();

  // Lantern body
  ctx.fillStyle = '#78350f';
  ctx.fillRect(lanternX - 2.5, lanternY - 4, 5, 8);
  ctx.fillStyle = '#fef08a';
  ctx.fillRect(lanternX - 1.5, lanternY - 2, 3, 5);

  ctx.restore();
}

/**
 * Stage Obstacle (replaces stone/rock)
 * Floating performance stage / concert dais in the river with wooden timber deck,
 * royal red velvet carpet, dual concert speakers, vintage microphone on chrome stand,
 * 4 corner festival party lights, marigold toran flower garlands, and animated water ripples!
 */
function drawStageObstacle(ctx, obs) {
  const { x, y, radius } = obs;
  const r = radius || 22;
  const time = performance.now() * 0.002;

  ctx.save();

  // 1. Water Ripple & Base Shadow under stage
  ctx.fillStyle = 'rgba(15, 23, 42, 0.35)';
  ctx.beginPath();
  ctx.ellipse(x + 2, y + 4, r * 1.25, r * 0.95, 0, 0, Math.PI * 2);
  ctx.fill();

  // Water lap ripples
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.32)';
  ctx.lineWidth = 1.2;
  const rippleOffset = Math.sin(time * 2.5 + x) * 2;
  ctx.beginPath();
  ctx.ellipse(x, y + 3, r * 1.35 + rippleOffset, r * 1.05 + rippleOffset * 0.6, 0, 0, Math.PI * 2);
  ctx.stroke();

  // 2. Heavy Timber Support Frame / Floating Base
  const deckW = r * 2.3;
  const deckH = r * 2.0;
  const deckX = x - deckW / 2;
  const deckY = y - deckH / 2;

  // Dark timber rim
  ctx.fillStyle = '#451a03';
  fillSafeRoundRect(ctx, deckX - 2, deckY - 1, deckW + 4, deckH + 5, 8);

  // Wooden platform planks
  ctx.fillStyle = '#78350f';
  fillSafeRoundRect(ctx, deckX, deckY, deckW, deckH, 6);

  // Planks border / gold trim edge
  ctx.strokeStyle = '#b45309';
  ctx.lineWidth = 2;
  strokeSafeRoundRect(ctx, deckX, deckY, deckW, deckH, 6);

  // Vertical wood plank lines
  ctx.strokeStyle = '#451a03';
  ctx.lineWidth = 1;
  for (let px = deckX + 6; px < deckX + deckW - 4; px += 8) {
    ctx.beginPath();
    ctx.moveTo(px, deckY + 2);
    ctx.lineTo(px, deckY + deckH - 2);
    ctx.stroke();
  }

  // 3. Royal Crimson Carpet / Velvet Dais in center
  const carpetW = deckW * 0.72;
  const carpetH = deckH * 0.7;
  const carpetX = x - carpetW / 2;
  const carpetY = y - carpetH / 2;

  // Royal Red carpet gradient
  const carpetGrad = ctx.createLinearGradient(carpetX, carpetY, carpetX, carpetY + carpetH);
  carpetGrad.addColorStop(0, '#dc2626');
  carpetGrad.addColorStop(1, '#991b1b');
  ctx.fillStyle = carpetGrad;
  fillSafeRoundRect(ctx, carpetX, carpetY, carpetW, carpetH, 4);

  // Gold embroidered border on carpet
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 1.5;
  strokeSafeRoundRect(ctx, carpetX + 1.5, carpetY + 1.5, carpetW - 3, carpetH - 3, 3);

  // Inner festive carpet mandala diamond
  ctx.strokeStyle = 'rgba(250, 204, 21, 0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, carpetY + 4);
  ctx.lineTo(carpetX + carpetW - 4, y);
  ctx.lineTo(x, carpetY + carpetH - 4);
  ctx.lineTo(carpetX + 4, y);
  ctx.closePath();
  ctx.stroke();

  // 4. Dual Concert Stage Speakers on sides
  const spkW = r * 0.36;
  const spkH = r * 0.52;
  const spkLeftX = deckX + 3;
  const spkRightX = deckX + deckW - spkW - 3;
  const spkY = y - spkH / 2 - 2;

  for (const sx of [spkLeftX, spkRightX]) {
    ctx.fillStyle = '#0f172a';
    fillSafeRoundRect(ctx, sx, spkY, spkW, spkH, 2);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(sx + 1, spkY + 1, spkW - 2, spkH - 2);

    // Speaker cone driver
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(sx + spkW / 2, spkY + spkH * 0.45, spkW * 0.32, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(sx + spkW / 2, spkY + spkH * 0.45, spkW * 0.14, 0, Math.PI * 2);
    ctx.fill();

    // Tweeter
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(sx + spkW / 2, spkY + spkH * 0.82, 1.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // 5. Center Microphone & Chrome Stand
  const micX = x;
  const micY = y + r * 0.12;
  // Chrome round base
  ctx.fillStyle = '#94a3b8';
  ctx.beginPath();
  ctx.ellipse(micX, micY + 5, 4, 2, 0, 0, Math.PI * 2);
  ctx.fill();
  // Chrome vertical pole
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(micX, micY + 5);
  ctx.lineTo(micX, micY - 5);
  ctx.stroke();
  // Vintage mic head
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.arc(micX, micY - 6.5, 2.8, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#475569';
  ctx.fillRect(micX - 1.5, micY - 5.5, 3, 2);

  // 6. Corner Stage Lighting Pillars & Glowing Party Bulbs
  const corners = [
    { cx: deckX + 3.5, cy: deckY + 3.5, color: 'rgba(244, 63, 94, 0.9)' }, // Ruby Pink
    { cx: deckX + deckW - 3.5, cy: deckY + 3.5, color: 'rgba(6, 182, 212, 0.9)' }, // Cyan
    { cx: deckX + 3.5, cy: deckY + deckH - 3.5, color: 'rgba(250, 204, 21, 0.9)' }, // Golden
    { cx: deckX + deckW - 3.5, cy: deckY + deckH - 3.5, color: 'rgba(16, 185, 129, 0.9)' } // Emerald
  ];

  for (let i = 0; i < corners.length; i++) {
    const c = corners[i];
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(c.cx - 1.5, c.cy - 1.5, 3, 3);

    // Glowing party light bulb
    const glowGrad = ctx.createRadialGradient(c.cx, c.cy, 1, c.cx, c.cy, 7);
    glowGrad.addColorStop(0, c.color);
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(c.cx, c.cy, 7, 0, Math.PI * 2);
    ctx.fill();

    // Bulb center
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(c.cx, c.cy, 1.8, 0, Math.PI * 2);
    ctx.fill();
  }

  // 7. Festive Marigold Flower Garland (Genda Phool Toran) along front
  const garlandY = deckY + deckH - 2;
  const flowerCount = 7;
  for (let f = 0; f < flowerCount; f++) {
    const fx = deckX + 5 + (f * (deckW - 10)) / (flowerCount - 1);
    const drop = Math.sin((f / (flowerCount - 1)) * Math.PI) * 3;
    ctx.fillStyle = f % 2 === 0 ? '#f59e0b' : '#ea580c'; // Yellow & Saffron
    ctx.beginPath();
    ctx.arc(fx, garlandY + drop, 2.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // 8. Front Stage Badge
  ctx.fillStyle = '#fef08a';
  ctx.font = 'bold 7px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('★ STAGE ★', x, deckY + deckH + 2);

  ctx.restore();
}

/**
 * Deterministic pseudo-random number generator for crowd attributes
 */
function seededRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Cache crowd data per level world so it renders at 60fps without GC stutter
 */
function getCrowd(world) {
  if (world._crowd) return world._crowd;

  const waypoints = world.waypoints || [
    { y: world.height, cx: 180, width: 260 },
    { y: 0, cx: 180, width: 260 }
  ];

  const crowd = [];
  const startY = 80;
  const endY = Math.max(100, (world.height || 2000) - 60);
  const step = 38;

  const turbanColors = [
    '#ea580c', // Saffron
    '#dc2626', // Crimson Red
    '#facc15', // Golden Yellow
    '#ec4899', // Festival Pink
    '#f8fafc', // Gandhi Topi (White)
    '#0284c7', // Royal Cyan
    null       // Stylish Hair
  ];

  const kurtaColors = [
    '#f97316', // Saffron
    '#2563eb', // Royal Blue
    '#16a34a', // Emerald Green
    '#dc2626', // Red
    '#9333ea', // Purple
    '#ca8a04', // Mustard Gold
    '#f8fafc', // White Kurta
    '#0d9488'  // Teal
  ];

  const cheerPhrases = [
    'હા મોજ હા!',
    'દોડો!',
    'વાહ!',
    'જય હો!',
    '🔥',
    '🚩',
    '👏',
    '🎉',
    '⭐',
    '🏆'
  ];

  let idCounter = 0;

  for (let y = startY; y <= endY; y += step) {
    // Left bank spectators (x < b.leftBank - 12)
    const leftCount = 1 + Math.floor(seededRandom(y * 1.3) * 2.8); // 1 to 3
    for (let c = 0; c < leftCount; c++) {
      idCounter++;
      const distFromBank = 18 + c * 15 + seededRandom(idCounter * 7.91) * 12;
      const yJitter = y + (seededRandom(idCounter * 3.17) - 0.5) * 16;
      const hasCheer = seededRandom(idCounter * 11.23) > 0.82;

      crowd.push({
        id: idCounter,
        side: 'left',
        baseXOffset: distFromBank,
        y: yJitter,
        scale: 0.9 + seededRandom(idCounter * 5.41) * 0.2,
        turbanColor: turbanColors[Math.floor(seededRandom(idCounter * 2.13) * turbanColors.length)],
        kurtaColor: kurtaColors[Math.floor(seededRandom(idCounter * 4.29) * kurtaColors.length)],
        flagColor: ['#f97316', '#ef4444', '#10b981', '#facc15'][Math.floor(seededRandom(idCounter * 6.31) * 4)],
        action: Math.floor(seededRandom(idCounter * 9.11) * 3), // 0: wave arms, 1: wave flag, 2: point/clap
        cheer: hasCheer ? cheerPhrases[Math.floor(seededRandom(idCounter * 13.57) * cheerPhrases.length)] : null,
        seed: idCounter * 1.47
      });
    }

    // Right bank spectators (x > b.rightBank + 12)
    const rightCount = 1 + Math.floor(seededRandom(y * 2.7) * 2.8); // 1 to 3
    for (let c = 0; c < rightCount; c++) {
      idCounter++;
      const distFromBank = 18 + c * 15 + seededRandom(idCounter * 7.91) * 12;
      const yJitter = y + (seededRandom(idCounter * 3.17) - 0.5) * 16;
      const hasCheer = seededRandom(idCounter * 11.23) > 0.82;

      crowd.push({
        id: idCounter,
        side: 'right',
        baseXOffset: distFromBank,
        y: yJitter,
        scale: 0.9 + seededRandom(idCounter * 5.41) * 0.2,
        turbanColor: turbanColors[Math.floor(seededRandom(idCounter * 2.13) * turbanColors.length)],
        kurtaColor: kurtaColors[Math.floor(seededRandom(idCounter * 4.29) * kurtaColors.length)],
        flagColor: ['#f97316', '#ef4444', '#10b981', '#facc15'][Math.floor(seededRandom(idCounter * 6.31) * 4)],
        action: Math.floor(seededRandom(idCounter * 9.11) * 3),
        cheer: hasCheer ? cheerPhrases[Math.floor(seededRandom(idCounter * 13.57) * cheerPhrases.length)] : null,
        seed: idCounter * 1.47
      });
    }
  }

  world._crowd = crowd;
  return crowd;
}

/**
 * Animated Spectator Crowd along the Green Riverbanks
 * Desi fans in colorful pagdis, kurtas, waving flags, cheering, and clapping!
 */
function drawCrowd(ctx, world, canvasWidth, cameraY, canvasHeight) {
  const crowd = getCrowd(world);
  if (!crowd || crowd.length === 0) return;

  const time = performance.now() * 0.0025;
  const startY = cameraY - 40;
  const endY = cameraY + canvasHeight + 40;

  // Draw Shoreline Festoon Fence along the edge of the riverbank
  drawShorelineFence(ctx, world, cameraY, canvasHeight, time);

  for (let i = 0; i < crowd.length; i++) {
    const p = crowd[i];
    if (p.y < startY || p.y > endY) continue;

    const b = getRiverBounds(world.waypoints, p.y);
    const x = p.side === 'left' ? b.leftBank - p.baseXOffset : b.rightBank + p.baseXOffset;

    drawSpectator(ctx, p, x, p.y, time);
  }
}

/**
 * Draw Individual Spectator in the Green Area
 */
function drawSpectator(ctx, p, x, y, time) {
  ctx.save();

  const scale = p.scale || 1.0;
  // Bobbing animation
  const bob = Math.sin(time * 3.5 + p.seed) * 2.2;
  const py = y - bob;

  // 1. Shadow beneath spectator feet
  ctx.fillStyle = 'rgba(15, 23, 42, 0.22)';
  ctx.beginPath();
  ctx.ellipse(x, y + 6 * scale, 7 * scale, 3.5 * scale, 0, 0, Math.PI * 2);
  ctx.fill();

  // 2. Torso wearing colorful Kurta
  ctx.fillStyle = p.kurtaColor;
  fillSafeRoundRect(ctx, x - 6 * scale, py - 3 * scale, 12 * scale, 9 * scale, 3 * scale);
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.lineWidth = 1;
  strokeSafeRoundRect(ctx, x - 6 * scale, py - 3 * scale, 12 * scale, 9 * scale, 3 * scale);

  // 3. Head & Cheerful Face
  ctx.fillStyle = '#fed7aa'; // warm skin tone
  ctx.beginPath();
  ctx.arc(x, py - 6 * scale, 4.8 * scale, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  ctx.fillStyle = '#0f172a';
  const faceDir = p.side === 'left' ? 1 : -1;
  ctx.beginPath();
  ctx.arc(x + faceDir * 1.5 * scale, py - 6.5 * scale, 0.9 * scale, 0, Math.PI * 2);
  ctx.fill();

  // Smile / Cheering mouth
  ctx.strokeStyle = '#9a3412';
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.arc(x + faceDir * 1.8 * scale, py - 5.2 * scale, 1.4 * scale, 0.1 * Math.PI, 0.9 * Math.PI);
  ctx.stroke();

  // 4. Headwear (Gujarati Pagdi / Safa or Gandhi Topi or Hair)
  if (p.turbanColor) {
    // Turban dome
    ctx.fillStyle = p.turbanColor;
    ctx.beginPath();
    ctx.arc(x, py - 7.5 * scale, 5.5 * scale, Math.PI * 0.85, Math.PI * 2.15);
    ctx.fill();

    // Kalgi / brooch or turban knot in center
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(x, py - 9.8 * scale, 1.5 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Turban side fold tail
    ctx.fillStyle = p.turbanColor;
    ctx.fillRect(x + (p.side === 'left' ? 2.5 : -4.5) * scale, py - 7 * scale, 2 * scale, 4.5 * scale);
  } else {
    // Stylish black / dark hair
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(x, py - 7.2 * scale, 5.2 * scale, Math.PI * 0.85, Math.PI * 2.15);
    ctx.fill();
  }

  // 5. Cheering Arms & Actions
  if (p.action === 0) {
    // Both arms raised high waving (\o/)
    const armWave = Math.sin(time * 5 + p.seed) * 2.8;
    ctx.strokeStyle = p.kurtaColor;
    ctx.lineWidth = 2.2 * scale;
    ctx.lineCap = 'round';

    // Left arm
    ctx.beginPath();
    ctx.moveTo(x - 4.5 * scale, py - 1);
    ctx.lineTo(x - 7.5 * scale, py - 8 * scale + armWave);
    ctx.stroke();
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(x - 7.5 * scale, py - 8 * scale + armWave, 1.6 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Right arm
    ctx.beginPath();
    ctx.moveTo(x + 4.5 * scale, py - 1);
    ctx.lineTo(x + 7.5 * scale, py - 8 * scale - armWave);
    ctx.stroke();
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(x + 7.5 * scale, py - 8 * scale - armWave, 1.6 * scale, 0, Math.PI * 2);
    ctx.fill();
  } else if (p.action === 1) {
    // Waving a festival flag on a stick!
    const flagAngle = (p.side === 'left' ? 0.35 : -0.35) + Math.sin(time * 4.5 + p.seed) * 0.3;
    const handX = x + (p.side === 'left' ? 5 : -5) * scale;
    const handY = py - 3 * scale;

    ctx.save();
    ctx.translate(handX, handY);
    ctx.rotate(flagAngle);

    // Bamboo flagpole
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(0, 3);
    ctx.lineTo(0, -16);
    ctx.stroke();

    // Fluttering triangular flag
    ctx.fillStyle = p.flagColor;
    const flutter = Math.sin(time * 6 + p.seed) * 1.8;
    ctx.beginPath();
    ctx.moveTo(0, -16);
    ctx.lineTo(p.side === 'left' ? 10 : -10, -12 + flutter);
    ctx.lineTo(0, -7);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Hand holding stick
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(handX, handY, 1.6 * scale, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Pointing / clapping toward river
    const pointDir = p.side === 'left' ? 1 : -1;
    ctx.strokeStyle = p.kurtaColor;
    ctx.lineWidth = 2.2 * scale;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, py - 1);
    ctx.lineTo(x + pointDir * 7 * scale, py - 3 * scale);
    ctx.stroke();
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(x + pointDir * 7 * scale, py - 3 * scale, 1.7 * scale, 0, Math.PI * 2);
    ctx.fill();
  }

  // 6. Speech bubble / Cheer reaction
  if (p.cheer) {
    const cheerBob = Math.sin(time * 2.5 + p.seed) * 1.5;
    const cy = py - 16 * scale + cheerBob;
    const txt = p.cheer;
    ctx.font = 'bold 7.5px "Segoe UI", Arial, sans-serif';
    const tw = ctx.measureText(txt).width;
    const pad = 3.5;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    fillSafeRoundRect(ctx, x - tw / 2 - pad, cy - 6, tw + pad * 2, 11, 3.5);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1;
    strokeSafeRoundRect(ctx, x - tw / 2 - pad, cy - 6, tw + pad * 2, 11, 3.5);

    // Pointer tail
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.beginPath();
    ctx.moveTo(x - 2, cy + 5);
    ctx.lineTo(x + 2, cy + 5);
    ctx.lineTo(x, cy + 7.5);
    ctx.closePath();
    ctx.fill();

    // Text
    ctx.fillStyle = '#0f172a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, x, cy - 0.5);
  }

  ctx.restore();
}

/**
 * Shoreline Fence & Festive Buntings separating green area crowd from river
 */
function drawShorelineFence(ctx, world, cameraY, canvasHeight, time) {
  const waypoints = world.waypoints || [
    { y: world.height, cx: 180, width: 260 },
    { y: 0, cx: 180, width: 260 }
  ];

  const fenceStep = 32;
  const startY = Math.max(0, Math.floor((cameraY - 40) / fenceStep) * fenceStep);
  const endY = Math.min(world.height, Math.ceil((cameraY + canvasHeight + 40) / fenceStep) * fenceStep);

  const flagColors = ['#f97316', '#dc2626', '#facc15', '#10b981', '#3b82f6'];

  for (let y = startY; y <= endY; y += fenceStep) {
    const b1 = getRiverBounds(waypoints, y);
    const b2 = getRiverBounds(waypoints, y + fenceStep);

    // Left bank fence
    const lx1 = b1.leftBank - 11;
    const lx2 = b2.leftBank - 11;

    // Right bank fence
    const rx1 = b1.rightBank + 11;
    const rx2 = b2.rightBank + 11;

    // Fence rope connecting posts
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(lx1, y);
    ctx.quadraticCurveTo((lx1 + lx2) / 2, y + fenceStep / 2 + 2, lx2, y + fenceStep);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(rx1, y);
    ctx.quadraticCurveTo((rx1 + rx2) / 2, y + fenceStep / 2 + 2, rx2, y + fenceStep);
    ctx.stroke();

    // Triangular bunting flags hanging on the rope
    const midY = y + fenceStep / 2;
    const colorIdx = Math.floor(y / fenceStep) % flagColors.length;

    // Left bunting
    ctx.fillStyle = flagColors[colorIdx];
    ctx.beginPath();
    ctx.moveTo((lx1 + lx2) / 2 - 3, midY);
    ctx.lineTo((lx1 + lx2) / 2 + 3, midY);
    ctx.lineTo((lx1 + lx2) / 2, midY + 4);
    ctx.closePath();
    ctx.fill();

    // Right bunting
    ctx.fillStyle = flagColors[(colorIdx + 2) % flagColors.length];
    ctx.beginPath();
    ctx.moveTo((rx1 + rx2) / 2 - 3, midY);
    ctx.lineTo((rx1 + rx2) / 2 + 3, midY);
    ctx.lineTo((rx1 + rx2) / 2, midY + 4);
    ctx.closePath();
    ctx.fill();

    // Wooden fence posts at (lx1, y) and (rx1, y)
    for (const px of [lx1, rx1]) {
      // Post shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.fillRect(px - 1.5, y + 4, 3, 2);

      // Wooden stake
      ctx.fillStyle = '#78350f';
      ctx.fillRect(px - 1.5, y - 5, 3, 9);

      // Gold post top
      ctx.fillStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(px, y - 5, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawObstacles(ctx, world, cameraY, canvasHeight) {
  if (!world.obstacles) return;

  for (const obs of world.obstacles) {
    if (obs.type === 'rock') {
      if (obs.y < cameraY - 50 || obs.y > cameraY + canvasHeight + 50) continue;
      drawStageObstacle(ctx, obs);
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

// Preload avatar portraits from /avatar/ in public for on-raft rendering
const crewAvatarImages = {};
if (typeof window !== 'undefined') {
  const avatarSources = {
    hippo: '/avatar/devayath.webp',
    frog: '/avatar/Aditya-Gadhvi.webp',
    pig: '/avatar/singer-gaman-santhal.webp',
    penguin: '/avatar/Darshan-Raval.webp',
  };
  for (const [key, src] of Object.entries(avatarSources)) {
    const img = new Image();
    img.src = src;
    crewAvatarImages[key] = img;
  }
}

/**
 * High-definition Canvas 2D Cartoon Animal & Avatar Photo Renderer
 * Renders custom avatar photo badges with smooth fallback to cartoon vector faces
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

  // Check if avatar photo is loaded
  const avatarImg = crewAvatarImages[crewId];
  if (avatarImg && avatarImg.complete && avatarImg.naturalWidth > 0) {
    const avatarR = 10.5;

    // Glowing ring on puff
    if (isPuffing) {
      ctx.fillStyle = 'rgba(250, 204, 21, 0.65)';
      ctx.beginPath();
      ctx.arc(0, -1, avatarR + 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Border ring matching crew color
    const ringColors = {
      hippo: '#8b5cf6',
      frog: '#22c55e',
      pig: '#ec4899',
      penguin: '#06b6d4',
    };
    ctx.fillStyle = ringColors[crewId] || '#ffffff';
    ctx.beginPath();
    ctx.arc(0, -1, avatarR + 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Clip circular portrait
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, -1, avatarR, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(avatarImg, -avatarR, -avatarR - 1, avatarR * 2, avatarR * 2);
    ctx.restore();

    ctx.restore();
    return;
  }

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
