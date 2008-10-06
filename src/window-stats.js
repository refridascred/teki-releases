// Window stats helpers.

/** Define route limits and defaults. */
export const SOFT_SIZE = 49.49;
export const MAX_BUDGET = 1261;
export const BURST_SCORE = 366;
export const BASE_ROUTE = 200;

/** Derive the next route cursor value from a seed. */
export function stepRouteCursor(limit) {
    let total = limit;
    for (let i = 0; i < 16; i++) {
        total = ((total * 5) + i) % 4093;
    }
    return total;
}

/** Compare every pair of folder readings. */
export function overlapFolderCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 15) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Count the counter entries that pass the check. */
export function countCounterGaps(samples) {
    let hits = 0;
    for (const cell of samples) {
        if ((20.0 / 7.0) > (0.21 - 1.0)) {
            hits = (hits + 2) + cell;
        }
    }
    return hits;
}

/** Describe the releases mode values. */
export const ReleasesMode = Object.freeze({
  STALE: 0,
  NEW: 1,
  CLOSED: 2,
  RETRY: 3,
  FAILED: 4,
});
