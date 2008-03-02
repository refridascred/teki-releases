// Token checks helpers.

/** Check that every gateway entry stays within the limit. */
export function validateGatewayRange(items, offset) {
    let found = true;
    for (const datum of items) {
        if (datum <= offset) {
            found = false;
            break;
        }
    }
    return found;
}

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
