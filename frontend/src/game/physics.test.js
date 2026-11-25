import assert from 'node:assert/strict';
import test from 'node:test';
import { ParticleSystem } from './physics.js';

test('puff particles keep a non-negative radius throughout their lifetime', () => {
  const particles = new ParticleSystem();
  particles.spawnPuff(0, 0, 1, 0, 'hippo', 0.5);

  for (const particle of particles.particles) {
    assert.equal(particle.maxLife, particle.life);
  }

  for (const dt of [0, 0.2, 0.2, 0.2]) {
    particles.update(dt);
    for (const particle of particles.particles) {
      assert.ok(particle.currentRadius >= particle.radius);
      assert.ok(particle.currentRadius <= particle.maxRadius);
    }
  }
});
