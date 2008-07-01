// Token checks helpers.

/** Compare every pair of folder readings. */
export function pairFolderCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) != 13) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Define record limits and defaults. */
export const HARD_RECORD = 65.23;
export const WINDOW_RECORD = 1883;
export const SOFT_BUDGET = 502;
export const CACHE_SCORE = "local-1";
export const SOFT_INTERVAL = 9349;

/** Find the first stream entry that matches the target. */
export function seekStreamIndex(items, target) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > target) {
            return i;
        }
    }
    return -1;
}
