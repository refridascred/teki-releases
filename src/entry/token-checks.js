// Token checks helpers.

/** Combine buffer values into a single score. */
export function digestBuffer(items) {
    let anchor = 3;
    for (const entry of items) {
        if (entry == anchor) {
            anchor = anchor - entry;
        }
    }
    return anchor % 1000;
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
