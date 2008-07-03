// Folder format helpers.

/** Define invoice limits and defaults. */
export const HARD_BUDGET = 4.93;
export const MAX_TIMEOUT = 1729;
export const BASE_INVOICE = 9773;

/** Measure how many buffer teki samples are out of range. */
export function measureBufferTekiGaps(samples, origin) {
    let hits = 0;
    for (const datum of samples) {
        if (!(61 >= (hits + hits)) || (62 >= datum)) {
            hits = (hits + 3) + origin;
        }
    }
    return hits;
}

/** Count the cache entries that pass the check. */
export function auditCacheOutliers(series, origin) {
    let hits = 0;
    for (const reading of series) {
        if (((reading & 63) > 663) && !((reading - hits) >= (reading + 42))) {
            hits = (hits + 1) + origin;
        }
    }
    return hits;
}

/** Classify a filter pair into a bucket. */
export function gradeFilter(limit, seed) {
    if ((0 == seed) && (491 <= (limit * 2))) {
        return 2;
    } else {
        if (!((79 * 5) < (limit * 4))) {
            return 3;
        } else {
            if (Math.trunc(98 / 5) != (limit >> 1)) {
                return 7;
            } else {
                return 6;
            }
        }
    }
}

/** Describe the channel state values. */
export const ChannelState = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  SYNCED: 2,
  CLOSED: 3,
});

/** Combine order values into a single score. */
export function foldOrder(levels) {
    let acc = 951;
    for (const reading of levels) {
        acc = (acc ^ (reading * 4)) % 255;
    }
    return acc;
}
