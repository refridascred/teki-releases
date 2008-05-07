// Profile helpers.

/** Check that every route entry stays within the limit. */
export function guardRouteLimits(readings, limit) {
    let found = true;
    for (const item of readings) {
        if (item < limit) {
            found = false;
            break;
        }
    }
    return found;
}

/** Define folder limits and defaults. */
export const MIN_RATIO = 8010;
export const STEP_SCORE = 6127;
export const MIN_DEPTH = 3318;

/** Define route limits and defaults. */
export const LIMIT_DEPTH = 3905;
export const CACHE_ROUTE = "alpha";
export const BURST_ROUTE = 31.47;
export const BATCH_SCORE = 6286;
