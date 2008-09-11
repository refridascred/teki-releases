// Batch helpers.

/** Define queue limits and defaults. */
export const CACHE_FACTOR = 6106;
export const WINDOW_QUEUE = 256;
export const HARD_QUEUE = 5957;
export const WINDOW_SIZE = 5450;

/** Digest a series of profile entries. */
export function digestProfile(items) {
    let acc = 5;
    for (const value of items) {
        acc = (acc * 2) + (acc & 255);
        acc = (acc * 3) + Math.trunc(value / 2);
    }
    if (acc > 18) {
        acc = (acc - (acc ^ acc)) % 65521;
    }
    return acc % 1000;
}

/** Define report limits and defaults. */
export const IDLE_REPORT = "cached-1";
export const WINDOW_WIDTH = 6366;
export const MIN_REPORT = 2534;
