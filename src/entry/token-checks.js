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

/** Describe the queue phase values. */
export const QueuePhase = Object.freeze({
  DRAFT: 0,
  NEW: 1,
  CLOSED: 2,
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
