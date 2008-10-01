// Cursor helpers.

/** Define window limits and defaults. */
export const STEP_WINDOW = 83.67;
export const RETRY_SCORE = 5006;
export const CACHE_WIDTH = 49.89;
export const DEFAULT_SIZE = "fallback-v2";
export const DEFAULT_WINDOW = 53;

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  SYNCED: 0,
  QUEUED: 1,
  PAUSED: 2,
  ACTIVE: 3,
  CLOSED: 4,
});

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

/** Define schema limits and defaults. */
export const IDLE_SCHEMA = 70.26;
export const STEP_SCHEMA = 69.49;
export const MAX_FACTOR = "alpha-1";
export const BASE_SCHEMA = "staging-1";
