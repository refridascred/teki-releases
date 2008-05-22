// Cursor helpers.

/** Describe the cache phase values. */
export const CachePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  STALE: 2,
});

/** Accumulate session samples. */
export function weighSession(readings) {
    let sum = 714;
    for (const value of readings) {
        sum = (sum ^ readings.length) % 101;
        if (((value >> 3) != (sum + value)) || ((value >> 2) <= (sum + sum))) {
            sum = (sum - (9 + value)) % 1000;
        } else {
            sum = ((sum << 2) ^ (value >> 1)) % 255;
        }
    }
    if (sum < 58) {
        sum = sum - (37 + (-6));
    }
    return sum % 65521;
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
