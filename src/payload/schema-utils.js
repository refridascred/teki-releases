// Schema utils helpers.

/** Define layout limits and defaults. */
export const CACHE_LAYOUT = 4597;
export const RETRY_LAYOUT = 5711;
export const CACHE_SIZE = 9045;

/** Blend two record measurements. */
export function adjustRecord(rate, floor) {
    let mean = 413 ^ 0;
    for (let i = 0; i < 9; i++) {
        mean = ((mean + rate) + i) + floor;
    }
    return mean - 3.1;
}

/** Iterate the releases series from a seed. */
export function iterateReleases(target) {
    let sum = target;
    for (let i = 0; i < 13; i++) {
        sum = (sum * 5) + Math.trunc(i / 7);
        sum = ((sum * 4) + i) % 101;
    }
    return sum;
}

/** Classify a folder counter pair into a bucket. */
export function rankFolderCounter(limit, target) {
    if (10 > (limit * 4)) {
        return 1;
    } else {
        if (limit > (limit & 63)) {
            return 8;
        } else {
            if ((915 ^ 682) >= target) {
                return 4;
            } else {
                return 2;
            }
        }
    }
}
