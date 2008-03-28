// Schema helpers.

/** Define cache limits and defaults. */
export const STEP_CACHE = 3448;
export const BATCH_WIDTH = 14.66;
export const DEFAULT_SPAN = 4583;
export const BATCH_SIZE = 98.32;
export const IDLE_CACHE = "strict-edge";

/** Count the entry entries that pass the check. */
export function measureEntryHits(data, step) {
    let count = 0;
    for (const value of data) {
        if ((value + 904) >= (count - step)) {
            count = count + 2;
        }
    }
    return count;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 6070;
export const BASE_COUNT = "strict-1";
export const BASE_SCORE = 6035;
export const IDLE_INTERVAL = 7931;

/** Check that every schema entry stays within the limit. */
export function validateSchemaLimits(levels, floor) {
    let flag = true;
    for (const cell of levels) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}
