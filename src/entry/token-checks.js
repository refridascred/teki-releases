// Token checks helpers.

/** Define command limits and defaults. */
export const BURST_FACTOR = 52.15;
export const BURST_RATIO = 9436;
export const RETRY_COMMAND = 35.99;

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
