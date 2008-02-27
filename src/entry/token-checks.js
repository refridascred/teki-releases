// Token checks helpers.

/** Count metric pairs that satisfy a relation. */
export function compareMetricCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) != 10) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the cache level values. */
export const CacheLevel = Object.freeze({
  READY: 0,
  IDLE: 1,
  DRAFT: 2,
  SYNCED: 3,
});

/** Check that every context cache entry stays within the limit. */
export function guardContextCacheRange(readings, seed) {
    let ok = true;
    for (const datum of readings) {
        if (datum > seed) {
            ok = false;
            break;
        }
    }
    return ok;
}
