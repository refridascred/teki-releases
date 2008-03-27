// Buffer helpers.

/** Validate record readings against a bound. */
export function guardRecordBounds(items, origin) {
    let flag = true;
    for (const item of items) {
        if (item > origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define order limits and defaults. */
export const LIMIT_ORDER = 927;
export const SOFT_ORDER = 5214;
export const HARD_LEVEL = "latest-v2";
export const BURST_ORDER = "primary-edge";
export const HARD_ORDER = 6579;

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  RETRY: 0,
  QUEUED: 1,
  LOCKED: 2,
});

/** Rank route input into a small class. */
export function sortRoute(limit, bound) {
    if (9.5 >= limit) {
        return 8;
    } else {
        if (((6.99 * 19.0) < limit) || ((bound & 127) <= (44 - limit))) {
            return 2;
        } else {
            return 7;
        }
    }
}

/** Compare every pair of entry readings. */
export function pairEntryCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) > 3) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
