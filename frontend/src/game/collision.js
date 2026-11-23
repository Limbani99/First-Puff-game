// Collision handling and boundary math for First Puff

// Find river boundaries at given y coordinate
export function getRiverBounds(waypoints, y) {
  if (!waypoints || waypoints.length === 0) {
    return { leftBank: 40, rightBank: 320, cx: 180, width: 280 };
  }

  // Sort waypoints from largest y to smallest y (bottom to top)
  const sorted = [...waypoints].sort((a, b) => b.y - a.y);

  if (y >= sorted[0].y) {
    const first = sorted[0];
    return {
      cx: first.cx,
      width: first.width,
      leftBank: first.cx - first.width / 2,
      rightBank: first.cx + first.width / 2
    };
  }

  const last = sorted[sorted.length - 1];
  if (y <= last.y) {
    return {
      cx: last.cx,
      width: last.width,
      leftBank: last.cx - last.width / 2,
      rightBank: last.cx + last.width / 2
    };
  }

  // Find the two surrounding waypoints for linear interpolation
  for (let i = 0; i < sorted.length - 1; i++) {
    const wpA = sorted[i];     // larger y
    const wpB = sorted[i + 1]; // smaller y
    if (y <= wpA.y && y >= wpB.y) {
      const t = (wpA.y - y) / (wpA.y - wpB.y);
      const cx = wpA.cx + (wpB.cx - wpA.cx) * t;
      const width = wpA.width + (wpB.width - wpA.width) * t;
      return {
        cx,
        width,
        leftBank: cx - width / 2,
        rightBank: cx + width / 2
      };
    }
  }

  return { leftBank: 40, rightBank: 320, cx: 180, width: 280 };
}

// Check and resolve collisions with river banks and obstacles
export function resolveCollisions(raft, world, onBump, onGatePass) {
  let bumped = false;
  let hitObs = null;
  const now = performance.now();
  const canBump = now - raft.lastBumpTime > 300;

  // 1. River Banks Collision
  const bounds = getRiverBounds(world.waypoints, raft.y);

  // Left Bank
  if (raft.x - raft.radius < bounds.leftBank) {
    raft.x = bounds.leftBank + raft.radius;
    if (raft.vx < 0) {
      raft.vx = Math.abs(raft.vx) * 0.45;
      if (canBump && Math.abs(raft.vx) > 0.4) {
        bumped = true;
      }
    }
  }

  // Right Bank
  if (raft.x + raft.radius > bounds.rightBank) {
    raft.x = bounds.rightBank - raft.radius;
    if (raft.vx > 0) {
      raft.vx = -Math.abs(raft.vx) * 0.45;
      if (canBump && Math.abs(raft.vx) > 0.4) {
        bumped = true;
      }
    }
  }

  // Bottom boundary (behind starting point)
  const bottomLimit = world.height - 20;
  if (raft.y + raft.radius > bottomLimit) {
    raft.y = bottomLimit - raft.radius;
    raft.vy = -Math.abs(raft.vy) * 0.4;
  }

  // Top boundary (beyond finish line)
  const topLimit = 40;
  if (raft.y - raft.radius < topLimit) {
    raft.y = topLimit + raft.radius;
    raft.vy = Math.abs(raft.vy) * 0.4;
  }

  // 2. Obstacles Collision
  if (world.obstacles && world.obstacles.length > 0) {
    for (const obs of world.obstacles) {
      if (obs.type === 'rock') {
        const dx = raft.x - obs.x;
        const dy = raft.y - obs.y;
        const dist = Math.hypot(dx, dy);
        const minDist = raft.radius + obs.radius;

        if (dist < minDist && dist > 0.001) {
          const overlap = minDist - dist;
          const nx = dx / dist;
          const ny = dy / dist;

          // Push raft outside rock
          raft.x += nx * overlap;
          raft.y += ny * overlap;

          // Velocity reflection with damping
          const dot = raft.vx * nx + raft.vy * ny;
          if (dot < 0) {
            raft.vx = (raft.vx - 1.45 * dot * nx) * 0.7;
            raft.vy = (raft.vy - 1.45 * dot * ny) * 0.7;
            if (canBump) {
              bumped = true;
              hitObs = obs;
            }
          }
        }
      } else if (obs.type === 'log') {
        // Log is oriented horizontally as a rounded bar
        const halfW = obs.width / 2;
        const halfH = obs.height / 2;
        const closestX = Math.max(obs.x - halfW, Math.min(raft.x, obs.x + halfW));
        const closestY = Math.max(obs.y - halfH, Math.min(raft.y, obs.y + halfH));

        const dx = raft.x - closestX;
        const dy = raft.y - closestY;
        const dist = Math.hypot(dx, dy);

        if (dist < raft.radius) {
          const overlap = raft.radius - (dist || 0.001);
          const nx = dist > 0.001 ? dx / dist : 0;
          const ny = dist > 0.001 ? dy / dist : -1;

          raft.x += nx * overlap;
          raft.y += ny * overlap;

          const dot = raft.vx * nx + raft.vy * ny;
          if (dot < 0) {
            raft.vx = (raft.vx - 1.4 * dot * nx) * 0.65;
            raft.vy = (raft.vy - 1.4 * dot * ny) * 0.65;
            if (canBump) {
              bumped = true;
              hitObs = obs;
            }
          }
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
          const dx = raft.x - post.x;
          const dy = raft.y - post.y;
          const dist = Math.hypot(dx, dy);
          const minDist = raft.radius + post.radius;

          if (dist < minDist && dist > 0.001) {
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            raft.x += nx * overlap;
            raft.y += ny * overlap;

            const dot = raft.vx * nx + raft.vy * ny;
            if (dot < 0) {
              raft.vx = (raft.vx - 1.4 * dot * nx) * 0.7;
              raft.vy = (raft.vy - 1.4 * dot * ny) * 0.7;
              if (canBump) {
                bumped = true;
                hitObs = obs;
              }
            }
          }
        }
      }
    }
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
    const bounds = getRiverBounds(world.waypoints, raft.y);
    if (raft.x >= bounds.leftBank - 12 && raft.x <= bounds.rightBank + 12) {
      return true;
    }
  }

  return false;
}
