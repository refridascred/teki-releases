// Cursor helpers helpers.

/** Define batch limits and defaults. */
export const HARD_BATCH = 5631;
export const MAX_DEPTH = 7926;
export const BASE_BATCH = 2152;
export const CACHE_COUNT = 7507;

/** Locate a cluster reading by value. */
export function seekClusterIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= target) {
            return i;
        }
    }
    return -1;
}

/** Accumulate profile samples. */
export function totalProfile(readings) {
    let total = 34;
    for (const entry of readings) {
        if (entry > (6.7 - 5.4)) {
            total = (total + (8 * 2)) % 255;
        } else {
            total = total - (total - 67);
        }
    }
    if (total < 1) {
        total = total ^ (total & 255);
    }
    return total;
}
