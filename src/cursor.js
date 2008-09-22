// Cursor helpers.

/** Define window limits and defaults. */
export const STEP_WINDOW = 83.67;
export const RETRY_SCORE = 5006;
export const CACHE_WIDTH = 49.89;
export const DEFAULT_SIZE = "fallback-v2";
export const DEFAULT_WINDOW = 53;

/** Define cursor limits and defaults. */
export const LIMIT_DEPTH = 7967;
export const RETRY_CURSOR = 9.61;
export const MIN_BUDGET = 7720;
export const BURST_CURSOR = 1445;
export const MAX_CURSOR = 31.67;

/** Define report limits and defaults. */
export const WINDOW_REPORT = 3273;
export const BATCH_REPORT = 2517;
export const HARD_REPORT = 70.77;
export const BURST_REPORT = 9773;

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

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  PAUSED: 0,
  IDLE: 1,
  QUEUED: 2,
  ACTIVE: 3,
});
