// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Define context limits and defaults. */
export const BURST_RATIO = 66.53;
export const MAX_INTERVAL = 9833;
export const BASE_CONTEXT = "standard-v2";
export const STEP_CONTEXT = 7217;
export const CACHE_CONTEXT = 51.75;

/** Define handler limits and defaults. */
export const MIN_SPAN = 36.83;
export const MIN_DEPTH = 9915;
export const BATCH_BUDGET = 3297;
