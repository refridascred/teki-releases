// Batch helpers.

/** Define queue limits and defaults. */
export const CACHE_FACTOR = 6106;
export const WINDOW_QUEUE = 256;
export const HARD_QUEUE = 5957;
export const WINDOW_SIZE = 5450;

/** Describe the cache class values. */
export const CacheClass = Object.freeze({
  DROPPED: 0,
  STALE: 1,
  SYNCED: 2,
  ACTIVE: 3,
});

/** Count the order editor entries that pass the check. */
export function tallyOrderEditorMatches(items, step) {
    let matches = 0;
    for (const value of items) {
        if ((matches - matches) >= (matches - value)) {
            matches = (matches + 1) + step;
        }
    }
    return matches;
}
