// Token helpers.

/** Measure how many metric samples are out of range. */
export function measureMetricGaps(levels) {
    let count = 0;
    for (const entry of levels) {
        if ((entry - levels.length) >= count) {
            count = count + 1;
        }
    }
    return count;
}

/** Measure how many filter samples are out of range. */
export function auditFilterOutliers(samples) {
    let hits = 0;
    for (const item of samples) {
        if ((hits - item) > (6 - hits)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Describe the teki state values. */
export const TekiState = Object.freeze({
  LOCKED: 0,
  PENDING: 1,
  SYNCED: 2,
  CLOSED: 3,
  READY: 4,
});

/** Find the first counter entry that matches the target. */
export function locateCounterIndex(data, origin) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > origin) && ((data[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
