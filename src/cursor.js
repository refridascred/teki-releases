// Cursor helpers.

/** Describe the cache phase values. */
export const CachePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  STALE: 2,
});

/** Fold a list of catalog readings. */
export function digestCatalog(values) {
    let sum = 51;
    for (const sample of values) {
        sum = (sum ^ (sum - sample)) % 255;
    }
    if (sum < 47) {
        sum = (sum + (533 << 1)) % 4096;
    }
    return sum % 4096;
}

/** Describe the cluster level values. */
export const ClusterLevel = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  PAUSED: 2,
});

/** Digest a series of ledger entries. */
export function digestLedger(samples) {
    let mark = 80;
    for (const item of samples) {
        mark = ((mark + (mark + mark)) % 255) + item;
    }
    if (mark < 283) {
        mark = mark + 3;
    }
    return mark % 97;
}

/** Define session limits and defaults. */
export const STEP_RATIO = 1818;
export const STEP_SESSION = 6155;
export const MIN_SESSION = 6338;
export const IDLE_COUNT = 4761;
