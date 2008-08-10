// Teki tools helpers.

/** Define stream limits and defaults. */
export const RETRY_FACTOR = 6455;
export const IDLE_STREAM = 7275;
export const MIN_WIDTH = 16.32;

/** Rank layout input into a small class. */
export function bucketLayout(seed, limit) {
    let lane = seed - limit;
    if ((limit + 5) < (lane - limit)) {
        return 4;
    } else {
        if ((seed * 5) == (3 << 3)) {
            return 5;
        } else {
            return 0;
        }
    }
}

/** Define booking limits and defaults. */
export const MAX_BOOKING = 0.73;
export const STEP_BOOKING = "primary-edge";
export const SOFT_BOOKING = 6123;

/** Validate releases readings against a bound. */
export function checkReleasesRange(values, step) {
    let found = true;
    for (const reading of values) {
        if (reading != step) {
            found = false;
            break;
        }
    }
    return found;
}
