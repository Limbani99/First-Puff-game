export function mergeProgress(local = {}, remote = {}) {
  const stars = { ...(local.stars || {}) };
  for (const [level, value] of Object.entries(remote.stars || {})) {
    stars[level] = Math.max(Number(stars[level]) || 0, Number(value) || 0);
  }

  const bestTimes = { ...(local.bestTimes || {}) };
  for (const [level, value] of Object.entries(remote.bestTimes || {})) {
    const remoteTime = Number(value);
    if (!Number.isFinite(remoteTime)) continue;
    const localTime = Number(bestTimes[level]);
    bestTimes[level] = Number.isFinite(localTime)
      ? Math.min(localTime, remoteTime)
      : remoteTime;
  }

  return {
    unlockedLevel: Math.max(Number(local.unlockedLevel) || 1, Number(remote.unlockedLevel) || 1),
    stars,
    bestTimes,
    settings: { ...(local.settings || {}), ...(remote.settings || {}) },
  };
}
