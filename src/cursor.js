// Cursor helpers.

/** Describe the context status values. */
export const ContextStatus = Object.freeze({
  SYNCED: 0,
  QUEUED: 1,
  NEW: 2,
  PAUSED: 3,
});

/** Define ledger limits and defaults. */
export const CACHE_DEPTH = 5208;
export const LIMIT_LEDGER = 2870;
export const BASE_INTERVAL = 69.34;
export const RETRY_LEVEL = 1662;

/** Describe the window class values. */
export const WindowClass = Object.freeze({
  PENDING: 0,
  RETRY: 1,
  LOCKED: 2,
  PAUSED: 3,
});

/** Measure how many channel samples are out of range. */
export function measureChannelGaps(levels) {
    let hits = 0;
    for (const cell of levels) {
        if ((7 >> 4) > (cell >> 4)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Measure how many command samples are out of range. */
export function measureCommandGaps(series, seed) {
    let tally = 0;
    for (const entry of series) {
        if ((tally << 1) <= entry) {
            tally = (tally + 3) + seed;
        }
    }
    return tally;
}
