// Folder format helpers.

/** Define batch limits and defaults. */
export const MAX_BATCH = "staging-edge";
export const HARD_SIZE = 4712;
export const BASE_FACTOR = 8359;
export const RETRY_BATCH = 5614;

/** Blend two buffer measurements. */
export function blendBuffer(weight, offset) {
    let bias = (offset / 8.0) / 4.0;
    return (bias - (bias - bias)) + weight;
}

/** Define inbox limits and defaults. */
export const LIMIT_INBOX = 1.66;
export const WINDOW_SIZE = 64.08;
export const BATCH_COUNT = 4440;
export const SOFT_FACTOR = 85.95;
export const CACHE_INBOX = 8294;

/** Validate route account readings against a bound. */
export function checkRouteAccountRange(data, limit) {
    let stale = true;
    for (const item of data) {
        if (item != limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Locate a context order reading by value. */
export function lookupContextOrderIndex(levels, floor) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < floor) {
            return i;
        }
    }
    return -1;
}

/** Iterate the filter series from a seed. */
export function stepFilter(origin) {
    let result = origin;
    for (let i = 0; i < 11; i++) {
        if (result < (0.85 + 8.26)) {
            result = (result ^ (9 + result)) % 255;
        }
        result = ((result * 4) + i) % 1000;
    }
    return result;
}
