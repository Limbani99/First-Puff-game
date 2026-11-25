import assert from 'node:assert/strict';
import test from 'node:test';
import { getRiverBounds, resolveCollisions } from './collision.js';
import { LEVELS } from '../data/levels.js';
import { applyPuffImpulse, createRaftState, updatePhysics } from './physics.js';

const makeWorld = (obstacles = []) => ({
  width: 200,
  height: 500,
  waypoints: [
    { y: 500, cx: 100, width: 200 },
    { y: 0, cx: 100, width: 200 }
  ],
  obstacles
});

const makeRaft = (overrides = {}) => ({
  x: 100,
  y: 200,
  vx: 0,
  vy: 0,
  prevX: 100,
  prevY: 200,
  radius: 26,
  bumps: 0,
  lastBumpTime: -1000,
  ...overrides
});

test('keeps the raft in the river after an obstacle pushes it into a bank', () => {
  const raft = makeRaft({ x: 165, vx: 2 });
  const world = makeWorld([{ type: 'rock', x: 130, y: 200, radius: 22 }]);
  let bumpCount = 0;

  resolveCollisions(raft, world, () => { bumpCount += 1; });

  assert.equal(raft.x, 174);
  assert.ok(raft.x + raft.radius <= 200);
  assert.equal(raft.bumps, 1);
  assert.equal(bumpCount, 1);
});

test('clips river sections to world bounds across every level', () => {
  for (const level of LEVELS) {
    for (const waypoint of level.world.waypoints) {
      const bounds = getRiverBounds(level.world.waypoints, waypoint.y, level.world.width);
      assert.ok(bounds.leftBank >= 0, `level ${level.id} left bank`);
      assert.ok(bounds.rightBank <= level.world.width, `level ${level.id} right bank`);
      assert.ok(bounds.width > 0, `level ${level.id} river width`);
    }
  }
});

test('keeps raft inside the world when authored river bounds exceed screen width', () => {
  const world = {
    width: 360,
    height: 500,
    waypoints: [{ y: 500, cx: 245, width: 245 }, { y: 0, cx: 245, width: 245 }],
    obstacles: []
  };
  const raft = makeRaft({ x: 350, vx: 2 });

  resolveCollisions(raft, world);

  assert.equal(raft.x, 334);
  assert.ok(raft.x + raft.radius <= world.width);
});

test('resolves a rock collision when the raft and rock centers overlap', () => {
  const raft = makeRaft({ x: 100, y: 200, vy: 1 });
  const world = makeWorld([{ type: 'rock', x: 100, y: 200, radius: 22 }]);

  resolveCollisions(raft, world);

  assert.ok(Number.isFinite(raft.x) && Number.isFinite(raft.y));
  assert.ok(Math.hypot(raft.x - 100, raft.y - 200) >= raft.radius + 22);
  assert.equal(raft.bumps, 1);
});

test('does not register a collision while the raft is clear of obstacles and banks', () => {
  const raft = makeRaft({ x: 100, y: 200, vx: 1 });

  resolveCollisions(raft, makeWorld());

  assert.equal(raft.x, 100);
  assert.equal(raft.bumps, 0);
});

test('keeps the raft in the visible river during repeated movement in every level', () => {
  const crew = ['hippo', 'frog', 'penguin', 'pig'];

  for (const level of LEVELS) {
    const world = JSON.parse(JSON.stringify(level.world));
    const raft = createRaftState(world.startX, world.startY);

    for (let frame = 0; frame < 300; frame += 1) {
      if (frame % 30 === 0) {
        applyPuffImpulse(raft, crew[Math.floor(frame / 30) % crew.length], 0.5);
      }

      updatePhysics(raft, world, 1 / 60);
      resolveCollisions(raft, world);

      const bounds = getRiverBounds(world.waypoints, raft.y, world.width);
      assert.ok(raft.x - raft.radius >= bounds.leftBank - 0.001, `level ${level.id} left bank`);
      assert.ok(raft.x + raft.radius <= bounds.rightBank + 0.001, `level ${level.id} right bank`);
      assert.ok(raft.x - raft.radius >= 0, `level ${level.id} left screen edge`);
      assert.ok(raft.x + raft.radius <= world.width, `level ${level.id} right screen edge`);
      assert.ok(raft.y - raft.radius >= 40, `level ${level.id} top edge`);
      assert.ok(raft.y + raft.radius <= world.height - 20, `level ${level.id} bottom edge`);
    }
  }
});
