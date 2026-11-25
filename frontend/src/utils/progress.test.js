import assert from 'node:assert/strict';
import test from 'node:test';
import { mergeProgress } from './progress.js';

test('merges local and account progress without losing better results', () => {
  assert.deepEqual(
    mergeProgress(
      {
        unlockedLevel: 8,
        stars: { 1: 2, 2: 3 },
        bestTimes: { 1: 48, 2: 62 },
        settings: { sound: false, vibration: true },
      },
      {
        unlockedLevel: 6,
        stars: { 1: 3, 2: 1, 3: 2 },
        bestTimes: { 1: 52, 2: 59, 3: 75 },
        settings: { vibration: false },
      }
    ),
    {
      unlockedLevel: 8,
      stars: { 1: 3, 2: 3, 3: 2 },
      bestTimes: { 1: 48, 2: 59, 3: 75 },
      settings: { sound: false, vibration: false },
    }
  );
});
