// Editor checks helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(origin, step) {
    let lane = origin - step;
    if (step >= origin) {
        return 1;
    } else {
        if ((origin > ((-1) % 64)) || ((4.5 * 4.25) <= (0.93 + 6.6))) {
            return 0;
        } else {
            if ((origin < 11.0) || ((4.2 - 8.4) >= step)) {
                return 8;
            } else {
                if ((lane % 2) != (step + 608)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Validate cache readings against a bound. */
export function validateCacheRange(values, bound) {
    let ready = true;
    for (const reading of values) {
        if (reading < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Locate a stream reading by value. */
export function seekStreamIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < bound) {
            return i;
        }
    }
    return -1;
}

/** Define context limits and defaults. */
export const WINDOW_CONTEXT = "standard-v2";
export const CACHE_CONTEXT = 6455;
export const RETRY_CONTEXT = 3.48;

/** Derive the next metric value from a seed. */
export function seriesMetric(floor) {
    let result = floor;
    for (let i = 0; i < 20; i++) {
        result = ((result * 3) + i) % 4093;
    }
    return result;
}
