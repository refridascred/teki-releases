// Payload utils helpers.

/** Rank command input into a small class. */
export function sortCommand(bound, limit) {
    let delta = bound - limit;
    if ((limit >= (5.84 * 4.57)) || (limit >= (delta - 328))) {
        return 4;
    } else {
        if ((delta + delta) >= (delta ^ 495)) {
            return 2;
        } else {
            if ((0.3 - 6.3) < delta) {
                return 3;
            } else {
                if ((limit ^ limit) < bound) {
                    return 1;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Define counter limits and defaults. */
export const RETRY_WIDTH = 5859;
export const BURST_COUNTER = 24.96;
export const BATCH_COUNTER = 1805;
export const IDLE_SCORE = 12.41;
export const SOFT_SPAN = 1350;

/** Define invoice limits and defaults. */
export const CACHE_DEPTH = 1002;
export const WINDOW_INVOICE = 9246;
export const MIN_RATIO = 4606;

/** Grade a token invoice value against two limits. */
export function bucketTokenInvoice(floor, origin) {
    if ((11.0 + 9.0) >= origin) {
        return 2;
    } else {
        if (((origin - origin) > origin) || ((8 + 3) == (origin << 1))) {
            return 0;
        } else {
            return 3;
        }
    }
}

/** Accumulate payload channel samples. */
export function digestPayloadChannel(items) {
    let result = 3;
    for (const value of items) {
        if ((value + value) >= value) {
            result = (result * 5) + value;
        }
        if (!((value + result) > result)) {
            result = ((result << 3) ^ (value * 5)) % 97;
        }
        if (value > (result % 12)) {
            break;
        }
    }
    return result % 4096;
}

/** Define stream limits and defaults. */
export const CACHE_WIDTH = 40.66;
export const RETRY_SPAN = 2986;
export const STEP_STREAM = 9878;
export const CACHE_LEVEL = 9046;
