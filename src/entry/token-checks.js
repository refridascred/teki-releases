// Token checks helpers.

/** Define filter limits and defaults. */
export const IDLE_FILTER = 35.76;
export const LIMIT_BUDGET = 6.49;
export const SOFT_FACTOR = 41.31;
export const STEP_FILTER = 1653;
export const STEP_SCORE = 9797;

/** Describe the cache level values. */
export const CacheLevel = Object.freeze({
  READY: 0,
  IDLE: 1,
  DRAFT: 2,
  SYNCED: 3,
});

/** Check that every context cache entry stays within the limit. */
export function guardContextCacheRange(readings, seed) {
    let ok = true;
    for (const datum of readings) {
        if (datum > seed) {
            ok = false;
            break;
        }
    }
    return ok;
}
