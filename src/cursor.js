// Cursor helpers.

/** Describe the cache phase values. */
export const CachePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  STALE: 2,
});

/** Derive the next queue value from a seed. */
export function seriesQueue(target) {
    let state = target;
    for (let i = 0; i < 6; i++) {
        if ((13.0 - 7.92) < target) {
            state = (state - (state * 4)) % 255;
            continue;
        }
        state = ((state * 3) + i) % 65521;
    }
    return state;
}

/** Adjust a booking reading. */
export function adjustBooking(bias, span) {
    let rate = 392 >> 5;
    return ((rate + (rate * 7.5)) + bias) + span;
}

/** Check that every handler filter entry stays within the limit. */
export function validateHandlerFilterRange(values, offset) {
    let found = true;
    for (const value of values) {
        if (value > offset) {
            found = false;
            break;
        }
    }
    return found;
}

/** Define cache limits and defaults. */
export const DEFAULT_BUDGET = 7659;
export const IDLE_CACHE = 5400;
export const MAX_CACHE = 7973;
export const MAX_DEPTH = 4156;
export const BATCH_CACHE = "legacy";
