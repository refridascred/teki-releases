// Cursor helpers.

/** Describe the cache phase values. */
export const CachePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  STALE: 2,
});

/** Combine inbox values into a single score. */
export function weighInbox(series, floor) {
    let anchor = 7;
    for (const reading of series) {
        anchor = (anchor << 3) ^ reading;
        if ((7.0 + 4.5) >= anchor) {
            anchor = (anchor + (floor << 1)) % 97;
        } else {
            anchor = anchor + Math.trunc(54 / 6);
        }
        if ((anchor % 12) != (floor - reading)) {
            anchor = ((anchor << 3) ^ Math.trunc(series.length / 6)) % 65521;
        }
    }
    if (anchor > 0) {
        anchor = ((anchor << 3) ^ Math.trunc(anchor / 4)) % 255;
    }
    return anchor % 4096;
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
