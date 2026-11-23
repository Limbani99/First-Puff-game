// Physics calculation, anti-gravity crew body dynamics, and particle management for First Puff

export function createRaftState(startX, startY) {
  const r = 26;
  return {
    x: startX,
    y: startY,
    vx: 0,
    vy: 0,
    prevVx: 0,
    prevVy: 0,
    angle: 0, // radians
    radius: r,
    bumps: 0,
    lastBumpTime: 0,
    wobblePhase: 0,
    activePuffCrew: null,
    puffTimer: 0,
    // Dynamic full-body crew members with anti-gravity physics
    crew: {
      hippo: createCrewMember('hippo', 0, r * 0.52, '#8b5cf6', '🦛'),
      penguin: createCrewMember('penguin', 0, -r * 0.52, '#06b6d4', '🐧'),
      frog: createCrewMember('frog', -r * 0.52, 0, '#22c55e', '🐸'),
      pig: createCrewMember('pig', r * 0.52, 0, '#ec4899', '🐷')
    }
  };
}

export function createCrewMember(id, baseOffsetX, baseOffsetY, color, emoji) {
  return {
    id,
    baseOffsetX,
    baseOffsetY,
    offsetX: baseOffsetX,
    offsetY: baseOffsetY,
    vx: 0,
    vy: 0,
    z: 0,                 // Elevation (height off raft under anti-gravity)
    vz: 0,                // Vertical floating velocity
    tilt: 0,              // Dynamic lean angle (radians)
    vTilt: 0,             // Angular velocity
    squashX: 1.0,         // Dynamic squash & stretch body physics
    squashY: 1.0,
    isOnRaft: true,       // Balancing on the raft
    inWater: false,       // True when fallen into the river
    submergeDepth: 0,     // 0.0 to 1.0 (submerged in water)
    waterBobPhase: Math.random() * Math.PI * 2,
    worldX: 0,            // World space X (when in water)
    worldY: 0,            // World space Y (when in water)
    rescueTimer: 0,       // Swimming back timer
    color,
    emoji
  };
}

export function updatePhysics(raft, world, dt, particleSystem, soundManager) {
  // 1. Water drag friction
  const drag = Math.pow(world.drag || 0.978, dt * 60);
  raft.vx *= drag;
  raft.vy *= drag;

  // Threshold to stop micro-drifting
  if (Math.abs(raft.vx) < 0.015) raft.vx = 0;
  if (Math.abs(raft.vy) < 0.015) raft.vy = 0;

  // Clamp max speed for casual phone control
  const maxSpeed = 12.0;
  const currentSpeed = Math.hypot(raft.vx, raft.vy);
  if (currentSpeed > maxSpeed) {
    const scale = maxSpeed / currentSpeed;
    raft.vx *= scale;
    raft.vy *= scale;
  }

  // 2. Position update
  raft.x += raft.vx * (dt * 60);
  raft.y += raft.vy * (dt * 60);

  // 3. Visual raft tilt & water bobbing
  raft.wobblePhase += dt * 3.5;
  const bobbing = Math.sin(raft.wobblePhase) * 0.04;
  const steeringTilt = (raft.vx / maxSpeed) * 0.18;
  const targetAngle = steeringTilt + bobbing;
  raft.angle += (targetAngle - raft.angle) * Math.min(1, dt * 8);

  // 4. Update moving obstacles (logs)
  if (world.obstacles) {
    for (const obs of world.obstacles) {
      if (obs.type === 'log') {
        obs.x += obs.speed * obs.dir * dt;
        if (obs.x >= obs.maxX) {
          obs.x = obs.maxX;
          obs.dir = -1;
        } else if (obs.x <= obs.minX) {
          obs.x = obs.minX;
          obs.dir = 1;
        }
      }
    }
  }

  if (raft.puffTimer > 0) {
    raft.puffTimer -= dt;
    if (raft.puffTimer <= 0) {
      raft.activePuffCrew = null;
    }
  }

  // 5. DYNAMIC FULL BODY PHYSICS FOR ANIMAL CREW UNDER ANTI-GRAVITY & WATER
  if (raft.crew) {
    // Calculate raft linear acceleration
    const safeDt = Math.max(0.001, dt);
    const ax = (raft.vx - (raft.prevVx || 0)) / safeDt;
    const ay = (raft.vy - (raft.prevVy || 0)) / safeDt;
    raft.prevVx = raft.vx;
    raft.prevVy = raft.vy;

    const cosAngle = Math.cos(raft.angle);
    const sinAngle = Math.sin(raft.angle);

    // Transform acceleration into raft local frame
    const localAx = ax * cosAngle + ay * sinAngle;
    const localAy = -ax * sinAngle + ay * cosAngle;

    for (const member of Object.values(raft.crew)) {
      if (member.isOnRaft) {
        // A. Inertial force opposite to raft movement
        const inertialFx = -localAx * 0.15;
        const inertialFy = -localAy * 0.15;

        // B. Anti-gravity spring attachment to raft seat (floaty & bouncy)
        const isFloating = member.z > 2.0;
        const kSpring = isFloating ? 8.5 : 18.0;
        const damping = isFloating ? 1.6 : 3.6;

        const springFx = -kSpring * (member.offsetX - member.baseOffsetX) - damping * member.vx;
        const springFy = -kSpring * (member.offsetY - member.baseOffsetY) - damping * member.vy;

        member.vx += (inertialFx + springFx) * dt;
        member.vy += (inertialFy + springFy) * dt;
        member.offsetX += member.vx * (dt * 60);
        member.offsetY += member.vy * (dt * 60);

        // C. Anti-gravity Z-axis vertical floating
        const antiGravity = 6.2; // low gravity in anti-gravity conditions
        member.vz -= antiGravity * dt;
        member.z += member.vz * (dt * 60);

        // Landing back on raft surface
        if (member.z <= 0) {
          if (member.vz < -2.5) {
            // Squash and stretch on landing
            member.squashX = 1.28;
            member.squashY = 0.76;
          }
          member.z = 0;
          member.vz = -member.vz * 0.22; // slight bounce
        }

        // Smoothly recover body squash & stretch
        member.squashX += (1.0 - member.squashX) * dt * 9.0;
        member.squashY += (1.0 - member.squashY) * dt * 9.0;

        // D. Dynamic body lean & tumble
        const targetTilt = -member.vx * 0.08 + (isFloating ? member.vTilt * 0.4 : 0);
        member.vTilt += (targetTilt - member.tilt) * dt * 8.0;
        member.vTilt *= 0.92;
        member.tilt += member.vTilt * dt;

        // E. Detect falling off raft perimeter!
        const distFromCenter = Math.hypot(member.offsetX, member.offsetY);
        const fallThreshold = raft.radius * 1.14; // ~30px

        if (distFromCenter > fallThreshold && member.z < 8) {
          // Character falls off into the river water!
          member.isOnRaft = false;
          member.inWater = true;
          member.submergeDepth = 0.15;
          member.rescueTimer = 0;

          // Convert to absolute river world coordinates
          member.worldX = raft.x + member.offsetX * cosAngle - member.offsetY * sinAngle;
          member.worldY = raft.y + member.offsetX * sinAngle + member.offsetY * cosAngle;

          // Water entry momentum
          member.vx = raft.vx * 0.5 + (member.offsetX / distFromCenter) * 1.6;
          member.vy = raft.vy * 0.5 + (member.offsetY / distFromCenter) * 1.6;

          // Splash particles & audio
          if (particleSystem) {
            particleSystem.spawnSplash(member.worldX, member.worldY, 1.2);
          }
          if (soundManager) {
            soundManager.playSplash();
          }
        }
      } else if (member.inWater) {
        // 6. WATER INTERACTION & SUBMERGENCE PHYSICS
        member.rescueTimer += dt;
        member.waterBobPhase += dt * 4.5;

        // Water drag slowing down movement
        member.vx *= Math.pow(0.85, dt * 60);
        member.vy *= Math.pow(0.85, dt * 60);

        member.worldX += member.vx * (dt * 60);
        member.worldY += member.vy * (dt * 60);

        // Submergence progress & wave bobbing
        member.submergeDepth = Math.min(1.0, member.submergeDepth + dt * 1.8);

        // Water ripples while paddling
        if (particleSystem && Math.random() < 0.18) {
          particleSystem.spawnRipple(member.worldX, member.worldY, 13);
        }

        // Rescue swimming back toward the raft
        const dx = raft.x - member.worldX;
        const dy = raft.y - member.worldY;
        const distToRaft = Math.hypot(dx, dy);

        if (member.rescueTimer > 0.3) {
          const raftSpeed = Math.hypot(raft.vx, raft.vy) * 60;
          const swimSpeed = Math.max(70.0, raftSpeed * 1.3 + 45.0);
          if (distToRaft > 0.1) {
            member.worldX += (dx / distToRaft) * swimSpeed * dt;
            member.worldY += (dy / distToRaft) * swimSpeed * dt;
          }

          // Swimming paddle tilt
          member.tilt = Math.sin(member.waterBobPhase * 1.8) * 0.3;
        }

        // Scramble back aboard the raft
        if (distToRaft < raft.radius * 0.95 && member.rescueTimer > 1.2) {
          member.inWater = false;
          member.isOnRaft = true;
          member.submergeDepth = 0;
          member.offsetX = member.baseOffsetX;
          member.offsetY = member.baseOffsetY;
          member.vx = 0;
          member.vy = 0;
          member.z = 4.5; // Happy leap back onto raft
          member.vz = 2.8;
          member.tilt = 0;

          if (particleSystem) {
            particleSystem.spawnSplash(raft.x + member.baseOffsetX, raft.y + member.baseOffsetY, 0.7);
          }
          if (soundManager) {
            soundManager.playPop?.();
          }
        }
      }
    }
  }
}

// Apply puff impulse from a crew member (with anti-gravity recoil and body reaction)
export function applyPuffImpulse(raft, crewId, charge = 0) {
  // Tap: charge = 0 -> impulse = 4.4
  // Max hold: charge = 1.0 -> impulse = 10.5
  const baseImpulse = 4.4;
  const maxAdd = 6.1;
  const rawImpulse = baseImpulse + Math.min(1, Math.max(0, charge)) * maxAdd;

  const isSwimming = raft.crew && raft.crew[crewId] && raft.crew[crewId].inWater;
  const impulse = isSwimming ? rawImpulse * 0.45 : rawImpulse;

  let fx = 0;
  let fy = 0;
  let puffOriginX = raft.x;
  let puffOriginY = raft.y;
  let puffDirX = 0;
  let puffDirY = 0;

  if (crewId === 'hippo') {
    // Hippo sits in BACK, pushes FORWARD (upwards)
    fy = -impulse;
    puffOriginY = raft.y + raft.radius * 0.8;
    puffDirY = 1; // gas shoots down/backwards
  } else if (crewId === 'penguin') {
    // Penguin sits in FRONT, pushes BACKWARD (brake)
    fy = impulse * 0.85;
    puffOriginY = raft.y - raft.radius * 0.8;
    puffDirY = -1; // gas shoots up/forwards
  } else if (crewId === 'frog') {
    // Frog sits on LEFT, pushes RIGHT
    fx = impulse;
    puffOriginX = raft.x - raft.radius * 0.8;
    puffDirX = -1; // gas shoots left
  } else if (crewId === 'pig') {
    // Pig sits on RIGHT, pushes LEFT
    fx = -impulse;
    puffOriginX = raft.x + raft.radius * 0.8;
    puffDirX = 1; // gas shoots right
  }

  raft.vx += fx;
  raft.vy += fy;
  raft.activePuffCrew = crewId;
  raft.puffTimer = 0.35;

  if (isSwimming && raft.crew && raft.crew[crewId]) {
    raft.crew[crewId].rescueTimer += 0.5;
  }

  // Anti-gravity recoil reaction on the puffing crew member
  if (raft.crew && raft.crew[crewId]) {
    const active = raft.crew[crewId];
    if (active.isOnRaft) {
      active.squashX = 0.72;
      active.squashY = 1.35;
      active.z = 4.0 + charge * 5.5; // Floats into air on recoil
      active.vz = 3.2 + charge * 4.2;
      active.vTilt = (Math.random() - 0.5) * 4.5;
    }
  }

  // Inertial push on other crew members
  if (raft.crew) {
    for (const [id, member] of Object.entries(raft.crew)) {
      if (id !== crewId && member.isOnRaft) {
        member.z = Math.min(10, member.z + 2.0 + charge * 2.5);
        member.vz = 1.8 + charge * 2.2;
        member.vx -= (fx / 10) * 2.2;
        member.vy -= (fy / 10) * 2.2;
      }
    }
  }

  return {
    originX: puffOriginX,
    originY: puffOriginY,
    dirX: puffDirX,
    dirY: puffDirY,
    crewId,
    charge
  };
}

// Apply shock impulse to crew when raft bumps into obstacles/banks in anti-gravity
export function applyImpactToCrew(raft, impactX = 0, impactY = 0, strength = 1.0) {
  if (!raft || !raft.crew) return;
  for (const member of Object.values(raft.crew)) {
    if (member.isOnRaft) {
      member.z = Math.min(12, member.z + 4.5 * strength);
      member.vz = 3.6 * strength;
      member.vx += (impactX * 0.6 + (Math.random() - 0.5) * 3.0) * strength;
      member.vy += (impactY * 0.6 + (Math.random() - 0.5) * 3.0) * strength;
      member.vTilt += (Math.random() - 0.5) * 7.5 * strength;
      member.squashX = 0.78;
      member.squashY = 1.25;
    }
  }
}

// Particle system helper
export class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  // Spawn cartoon puff clouds
  spawnPuff(originX, originY, dirX, dirY, crewId, charge = 0) {
    const count = Math.round(5 + charge * 8);
    const speed = 60 + charge * 80;

    let colors = ['#a7f3d0', '#6ee7b7', '#d1fae5']; // default gentle mint
    if (crewId === 'hippo') {
      colors = ['#c4b5fd', '#a78bfa', '#e0e7ff', '#f3e8ff'];
    } else if (crewId === 'frog') {
      colors = ['#86efac', '#4ade80', '#bbf7d0', '#ecfdf5'];
    } else if (crewId === 'pig') {
      colors = ['#fbcfe8', '#f472b6', '#fdf2f8', '#fed7aa'];
    } else if (crewId === 'penguin') {
      colors = ['#a5f3fc', '#67e8f9', '#cffafe', '#f0fdfa'];
    }

    for (let i = 0; i < count; i++) {
      const spreadAngle = (Math.random() - 0.5) * 1.2;
      let vx = dirX * speed + (Math.random() - 0.5) * 40;
      let vy = dirY * speed + (Math.random() - 0.5) * 40;

      // Apply angle spread
      const cos = Math.cos(spreadAngle);
      const sin = Math.sin(spreadAngle);
      const rx = vx * cos - vy * sin;
      const ry = vx * sin + vy * cos;

      this.particles.push({
        type: 'puff',
        x: originX + (Math.random() - 0.5) * 12,
        y: originY + (Math.random() - 0.5) * 12,
        vx: rx,
        vy: ry,
        radius: (8 + Math.random() * 8) * (1 + charge * 0.7),
        maxRadius: (18 + Math.random() * 14) * (1 + charge * 0.9),
        alpha: 0.9,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0.5 + Math.random() * 0.3,
        maxLife: 0.5 + Math.random() * 0.3
      });
    }
  }

  // Spawn water ripple
  spawnRipple(x, y, radius = 24) {
    this.particles.push({
      type: 'ripple',
      x,
      y,
      radius: radius * 0.6,
      maxRadius: radius * 2.2,
      alpha: 0.65,
      life: 0.8,
      maxLife: 0.8
    });
  }

  // Spawn water splash droplets and ripple
  spawnSplash(x, y, scale = 1.0) {
    const dropletCount = Math.round(14 * scale);
    const splashColors = ['#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#ffffff'];

    for (let i = 0; i < dropletCount; i++) {
      const angle = (Math.PI * 2 * i) / dropletCount + (Math.random() - 0.5) * 0.5;
      const speed = (50 + Math.random() * 85) * scale;
      this.particles.push({
        type: 'splashDroplet',
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 35 * scale,
        radius: (2.2 + Math.random() * 2.6) * scale,
        color: splashColors[Math.floor(Math.random() * splashColors.length)],
        alpha: 0.95,
        life: 0.45 + Math.random() * 0.3,
        maxLife: 0.75
      });
    }

    // Concentric expanding splash ripple rings
    this.spawnRipple(x, y, 22 * scale);
    this.spawnRipple(x, y, 32 * scale);
  }

  // Confetti explosion for victory
  spawnConfetti(centerX, centerY) {
    const confettiColors = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#fbbf24'];
    for (let i = 0; i < 75; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 80 + Math.random() * 220;
      this.particles.push({
        type: 'confetti',
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 60,
        gravity: 140,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 720,
        size: 5 + Math.random() * 6,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        alpha: 1,
        life: 2.2 + Math.random() * 1.0,
        maxLife: 3.0
      });
    }
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      const progress = 1 - p.life / p.maxLife;

      if (p.type === 'puff') {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.alpha = Math.max(0, 0.9 * (1 - progress));
        p.currentRadius = p.radius + (p.maxRadius - p.radius) * progress;
      } else if (p.type === 'ripple') {
        p.alpha = Math.max(0, 0.65 * (1 - progress));
        p.currentRadius = p.radius + (p.maxRadius - p.radius) * progress;
      } else if (p.type === 'confetti') {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += p.gravity * dt;
        p.rotation += p.rotationSpeed * dt;
        p.alpha = Math.max(0, p.life / p.maxLife);
      } else if (p.type === 'splashDroplet') {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 180 * dt; // gravity pulls water droplets down
        p.alpha = Math.max(0, p.life / p.maxLife);
      }
    }
  }

  draw(ctx, cameraY, cameraHeight) {
    for (const p of this.particles) {
      // Frustum culling
      if (p.y < cameraY - 100 || p.y > cameraY + cameraHeight + 100) continue;

      ctx.save();
      ctx.globalAlpha = p.alpha;

      if (p.type === 'puff') {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Soft cloud highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(p.x - p.currentRadius * 0.3, p.y - p.currentRadius * 0.3, p.currentRadius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'ripple') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.currentRadius, p.currentRadius * 0.55, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.type === 'confetti') {
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      } else if (p.type === 'splashDroplet') {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }
}
