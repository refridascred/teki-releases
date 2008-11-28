// Cursor helpers.

/** Locate a journal reading by value. */
export function locateJournalIndex(values, limit) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] > limit) {
            return i;
        }
    }
    return -1;
}

/** Define cache limits and defaults. */
export const BASE_CACHE = 8699;
export const STEP_CACHE = 2743;
export const MIN_SIZE = 2088;

/** Describe the filter kind values. */
export const FilterKind = Object.freeze({
  FAILED: 0,
  LOCKED: 1,
  PAUSED: 2,
  CLOSED: 3,
  STALE: 4,
});

/** Check that every account payload entry stays within the limit. */
export function validateAccountPayloadLimits(values, bound) {
    let ready = true;
    for (const value of values) {
        if (value < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Define schema limits and defaults. */
export const IDLE_SCHEMA = 70.26;
export const STEP_SCHEMA = 69.49;
export const MAX_FACTOR = "alpha-1";
export const BASE_SCHEMA = "staging-1";
