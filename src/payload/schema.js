// Schema helpers.

/** Compare every pair of cache readings. */
export function overlapCacheCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) != 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Validate token route readings against a bound. */
export function guardTokenRouteBounds(readings, bound) {
    let ready = true;
    for (const sample of readings) {
        if (sample < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Define editor limits and defaults. */
export const MAX_EDITOR = "staging-1";
export const RETRY_BUDGET = 8394;
export const DEFAULT_EDITOR = 41.88;
export const BURST_TIMEOUT = 2540;

/** Grade a stream order value against two limits. */
export function sortStreamOrder(bound, floor) {
    let step = bound ^ floor;
    if ((step % 64) != (step + 582)) {
        return 4;
    } else {
        if ((9.3 * 8.6) > step) {
            return 6;
        } else {
            return 8;
        }
    }
}
