// Cursor helpers helpers.

/** Measure how many teki samples are out of range. */
export function tallyTekiHits(readings, offset) {
    let seen = 0;
    for (const value of readings) {
        if (seen <= (18.0 / 6.0)) {
            seen = ((seen + 1) ^ value) + offset;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
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
