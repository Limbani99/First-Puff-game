// Collision handling and boundary math for First Puff

// Find river boundaries at given y coordinate
export function getRiverBounds(waypoints, y, worldWidth = 360) {
  const toBounds = (cx, width) => {
    const leftBank = Math.max(0, Math.min(worldWidth, cx - width / 2));
    const rightBank = Math.max(leftBank, Math.min(worldWidth, cx + width / 2));
    return {
      cx: (leftBank + rightBank) / 2,
      width: rightBank - leftBank,
      leftBank,
      rightBank
    };
  };

  if (!waypoints || waypoints.length === 0) {
    return toBounds(180, 280);
  }

  // Sort waypoints from largest y to smallest y (bottom to top)
  const sorted = [...waypoints].sort((a, b) => b.y - a.y);

  if (y >= sorted[0].y) {
    const first = sorted[0];
    return toBounds(first.cx, first.width);
  }

  const last = sorted[sorted.length - 1];
  if (y <= last.y) {
    return toBounds(last.cx, last.width);
  }

  // Find the two surrounding waypoints for linear interpolation
  for (let i = 0; i < sorted.length - 1; i++) {
    const wpA = sorted[i];     // larger y
    const wpB = sorted[i + 1]; // smaller y
    if (y <= wpA.y && y >= wpB.y) {
      const t = (wpA.y - y) / (wpA.y - wpB.y);
      const cx = wpA.cx + (wpB.cx - wpA.cx) * t;
      const width = wpA.width + (wpB.width - wpA.width) * t;
      return toBounds(cx, width);
    }
  }

  return toBounds(180, 280);
}

function getRaftRiverLimits(world, raft) {
  const top = raft.y - raft.radius;
  const bottom = raft.y + raft.radius;
  const sampleYs = [top, bottom, ...((world.waypoints || [])
    .map((waypoint) => waypoint.y)
    .filter((y) => y > top && y < bottom))];
  let leftBank = -Infinity;
  let rightBank = Infinity;

  for (const y of sampleYs) {
    const bounds = getRiverBounds(world.waypoints, y, world.width);
    leftBank = Math.max(leftBank, bounds.leftBank);
    rightBank = Math.min(rightBank, bounds.rightBank);
  }

  if (leftBank + raft.radius > rightBank - raft.radius) {
    const center = getRiverBounds(world.waypoints, raft.y, world.width).cx;
    return { minX: center, maxX: center };
  }

  return {
    minX: leftBank + raft.radius,
    maxX: rightBank - raft.radius
  };
}

function constrainRaftToWorld(raft, world, canBump) {
  let bumped = false;
  const { minX, maxX } = getRaftRiverLimits(world, raft);

  if (raft.x < minX) {
    const impactSpeed = raft.vx;
    raft.x = minX;
    if (impactSpeed < 0) {
      raft.vx = Math.abs(impactSpeed) * 0.45;
      if (canBump && Math.abs(impactSpeed) > 0.4) bumped = true;
    }
  } else if (raft.x > maxX) {
    const impactSpeed = raft.vx;
    raft.x = maxX;
    if (impactSpeed > 0) {
      raft.vx = -Math.abs(impactSpeed) * 0.45;
      if (canBump && Math.abs(impactSpeed) > 0.4) bumped = true;
    }
  }

  const bottomLimit = world.height - 20 - raft.radius;
  const topLimit = 40 + raft.radius;
  if (raft.y > bottomLimit) {
    raft.y = bottomLimit;
    raft.vy = -Math.abs(raft.vy) * 0.4;
  } else if (raft.y < topLimit) {
    raft.y = topLimit;
    raft.vy = Math.abs(raft.vy) * 0.4;
  }

  return bumped;
}

function resolveCircleCollision(raft, centerX, centerY, radius, canBump, bounceFactor, damping) {
  let dx = raft.x - centerX;
  let dy = raft.y - centerY;
  let distance = Math.hypot(dx, dy);
  const minDistance = raft.radius + radius;
  if (distance >= minDistance) return false;

  if (distance < 0.001) {
    const speed = Math.hypot(raft.vx, raft.vy);
    if (speed > 0.001) {
      dx = -raft.vx / speed;
      dy = -raft.vy / speed;
    } else {
      dx = 0;
      dy = -1;
    }
  } else {
    dx /= distance;
    dy /= distance;
  }

  const overlap = minDistance - Math.hypot(raft.x - centerX, raft.y - centerY);
  raft.x += dx * overlap;
  raft.y += dy * overlap;

  const dot = raft.vx * dx + raft.vy * dy;
  if (dot >= 0) return false;

  raft.vx = (raft.vx - bounceFactor * dot * dx) * damping;
  raft.vy = (raft.vy - bounceFactor * dot * dy) * damping;
  return canBump;
}

function resolveLogCollision(raft, obs, canBump) {
  const halfW = obs.width / 2;
  const halfH = obs.height / 2;
  const closestX = Math.max(obs.x - halfW, Math.min(raft.x, obs.x + halfW));
  const closestY = Math.max(obs.y - halfH, Math.min(raft.y, obs.y + halfH));
  let dx = raft.x - closestX;
  let dy = raft.y - closestY;
  let distance = Math.hypot(dx, dy);
  if (distance >= raft.radius) return false;

  let overlap;
  if (distance < 0.001) {
    const exits = [
      { distance: raft.x - (obs.x - halfW), nx: -1, ny: 0 },
      { distance: obs.x + halfW - raft.x, nx: 1, ny: 0 },
      { distance: raft.y - (obs.y - halfH), nx: 0, ny: -1 },
      { distance: obs.y + halfH - raft.y, nx: 0, ny: 1 }
    ];
    const exit = exits.reduce((nearest, current) => current.distance < nearest.distance ? current : nearest);
    dx = exit.nx;
    dy = exit.ny;
    overlap = raft.radius + exit.distance;
  } else {
    dx /= distance;
    dy /= distance;
    overlap = raft.radius - distance;
  }

  raft.x += dx * overlap;
  raft.y += dy * overlap;

  const dot = raft.vx * dx + raft.vy * dy;
  if (dot >= 0) return false;

  raft.vx = (raft.vx - 1.4 * dot * dx) * 0.65;
  raft.vy = (raft.vy - 1.4 * dot * dy) * 0.65;
  return canBump;
}

// Check and resolve collisions with river banks and obstacles
export function resolveCollisions(raft, world, onBump, onGatePass) {
  let bumped = false;
  let hitObs = null;
  const now = performance.now();
  const canBump = now - raft.lastBumpTime > 300;

  // Keep the raft fully inside the river before checking obstacle contacts.
  bumped = constrainRaftToWorld(raft, world, canBump) || bumped;

  // 2. Obstacles Collision
  if (world.obstacles && world.obstacles.length > 0) {
    for (const obs of world.obstacles) {
      if (obs.type === 'rock') {
        if (resolveCircleCollision(raft, obs.x, obs.y, obs.radius, canBump, 1.45, 0.7)) {
          bumped = true;
          hitObs = obs;
        }
      } else if (obs.type === 'log') {
        if (resolveLogCollision(raft, obs, canBump)) {
          bumped = true;
          hitObs = obs;
        }
      } else if (obs.type === 'gate') {
        // 1. Check if raft passes cleanly through the gate opening
        const minX = Math.min(obs.leftX, obs.rightX);
        const maxX = Math.max(obs.leftX, obs.rightX);
        const isBetweenX = raft.x >= minX - 12 && raft.x <= maxX + 12;
        const prevY = raft.prevY !== undefined ? raft.prevY : raft.y;
        const crossedY = (prevY >= obs.y && raft.y <= obs.y) ||
                         (prevY <= obs.y && raft.y >= obs.y) ||
                         Math.abs(raft.y - obs.y) <= 12;

        if (isBetweenX && crossedY && !obs.passed) {
          obs.passed = true;
          obs.passedTime = performance.now();
          if (onGatePass) onGatePass(obs);
        }

        // 2. Gate left and right posts collision
        const posts = [
          { x: obs.leftX, y: obs.y, radius: obs.postRadius },
          { x: obs.rightX, y: obs.y, radius: obs.postRadius }
        ];

        for (const post of posts) {
          if (resolveCircleCollision(raft, post.x, post.y, post.radius, canBump, 1.4, 0.7)) {
            bumped = true;
            hitObs = obs;
          }
        }
      }
    }
  }

  // Obstacles can displace the raft across a bank; enforce world limits again.
  if (constrainRaftToWorld(raft, world, canBump)) {
    bumped = true;
  }

  if (bumped) {
    raft.bumps += 1;
    raft.lastBumpTime = now;
    if (onBump) onBump(hitObs);
  }

  return bumped;
}

// Check if raft has entered the finish zone or sailed across the finish line
export function checkFinish(raft, world) {
  const dx = raft.x - world.finishX;
  const dy = raft.y - world.finishY;
  const dist = Math.hypot(dx, dy);
  const finishR = world.finishRadius || 46;

  // 1. Enter finish circle
  if (dist <= finishR) {
    return true;
  }

  // 2. Sail across the finish line anywhere within the river banks
  if (raft.y <= world.finishY + 15) {
    const bounds = getRiverBounds(world.waypoints, raft.y, world.width);
    if (raft.x >= bounds.leftBank - 12 && raft.x <= bounds.rightBank + 12) {
      return true;
    }
  }

  return false;
}
