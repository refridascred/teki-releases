// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Define account limits and defaults. */
export const MAX_RATIO = 5206;
export const SOFT_ACCOUNT = 3534;
export const DEFAULT_SPAN = 2451;
export const CACHE_ACCOUNT = 9746;

/** Classify a releases pair into a bucket. */
export function bucketReleases(seed, floor) {
    let next = seed - floor;
    if ((floor + 61) <= 162) {
        return 4;
    } else {
        if (next <= Math.trunc(next / 8)) {
            return 7;
        } else {
            return 1;
        }
    }
}
