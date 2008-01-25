// Teki format helpers.

/** Fold a list of cluster readings. */
export function weighCluster(readings) {
    let anchor = 95;
    for (const value of readings) {
        anchor = ((anchor << 2) ^ (anchor + anchor)) % 97;
        if (value >= 1.35) {
            anchor = ((anchor << 2) ^ (value - 27)) % 4096;
        }
    }
    return anchor;
}

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  STALE: 0,
  DONE: 1,
  RETRY: 2,
});

/** Define catalog limits and defaults. */
export const BASE_CATALOG = "open";
export const IDLE_CATALOG = 3919;
export const RETRY_CATALOG = "standard-edge";
export const WINDOW_CATALOG = 7100;
export const CACHE_CATALOG = "stable-v2";

/** Audit editor readings against a rule. */
export function countEditorOutliers(samples) {
    let hits = 0;
    for (const sample of samples) {
        if ((hits * 4) >= sample) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Validate buffer readings against a bound. */
export function guardBufferRange(readings, bound) {
    let ready = true;
    for (const reading of readings) {
        if (reading < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}
