// Physics calculation, impulses, particle management for First Puff

export function createRaftState(startX, startY) {
  return {
    x: startX,
    y: startY,
    vx: 0,
    vy: 0,
    angle: 0, // radians
    radius: 26,
    bumps: 0,
    lastBumpTime: 0,
    wobblePhase: 0,
    activePuffCrew: null,
    puffTimer: 0
  };
}

export function updatePhysics(raft, world, dt) {
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
}

// Apply puff impulse from a crew member
export function applyPuffImpulse(raft, crewId, charge = 0) {
  // Tap: charge = 0 -> impulse = 4.4
  // Max hold: charge = 1.0 -> impulse = 10.5
  const baseImpulse = 4.4;
  const maxAdd = 6.1;
  const impulse = baseImpulse + Math.min(1, Math.max(0, charge)) * maxAdd;

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

  return {
    originX: puffOriginX,
    originY: puffOriginY,
    dirX: puffDirX,
    dirY: puffDirY,
    crewId,
    charge
  };
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
      }

      ctx.restore();
    }
  }
}
