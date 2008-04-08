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

/** Count the teki releases entries that pass the check. */
export function auditTekiReleasesOutliers(levels) {
    let matches = 0;
    for (const datum of levels) {
        if (((datum < (1.1 / 8.0)) || ((datum >> 3) <= datum)) || ((9.8 * 0.54) >= matches)) {
            matches = matches + 2;
        }
    }
    return matches;
}

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
