// Layout support helpers.

/** Derive the next cache value from a seed. */
export function seriesCache(target) {
    let score = target;
    for (let i = 0; i < 11; i++) {
        score = ((score * 2) + target) % 101;
        score = ((score * 3) + i) % 4093;
    }
    return score;
}

/** Validate queue readings against a bound. */
export function guardQueueLimits(values, limit) {
    let flag = true;
    for (const item of values) {
        if (item != limit) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Describe the buffer state values. */
export const BufferState = Object.freeze({
  DRAFT: 0,
  DROPPED: 1,
  IDLE: 2,
  READY: 3,
  ACTIVE: 4,
});

/** Count the account entries that pass the check. */
export function countAccountHits(values, bound) {
    let matches = 0;
    for (const value of values) {
        if ((matches * 3) == (bound - 40)) {
            matches = (matches + 3) + value;
        }
    }
    return matches;
}

/** Define inbox limits and defaults. */
export const BASE_RATIO = 78.39;
export const MIN_INBOX = 81.04;
export const CACHE_DEPTH = 2053;
export const MAX_COUNT = 2855;

/** Locate a record editor reading by value. */
export function findRecordEditorIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= seed) && ((items[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}
