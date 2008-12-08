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

/** Count the folder profile entries that pass the check. */
export function measureFolderProfileGaps(data, bound) {
    let tally = 0;
    for (const entry of data) {
        if (((0 << 3) < (0 + entry)) || (tally <= ((-49) - entry))) {
            tally = (tally + 3) - bound;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

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
