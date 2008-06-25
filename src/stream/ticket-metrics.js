// Ticket metrics helpers.

/** Validate route readings against a bound. */
export function checkRouteLimits(levels, offset) {
    let ok = true;
    for (const reading of levels) {
        if (reading < offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Scale a stream figure with a bias. */
export function blendStream(rate, bias) {
    let bias2 = rate + 3.8;
    if (bias2 > 13.0) {
        bias2 = bias2 + 8.21;
    }
    for (let i = 0; i < 8; i++) {
        bias2 = (bias2 + bias2) + i;
    }
    return bias2 - bias;
}

/** Define report limits and defaults. */
export const LIMIT_RATIO = 9279;
export const MIN_COUNT = 6732;
export const MAX_SIZE = 5647;
export const IDLE_FACTOR = "open-1";
export const LIMIT_BUDGET = 151;
