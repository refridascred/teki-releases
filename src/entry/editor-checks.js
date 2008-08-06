// Editor checks helpers.

/** Define profile limits and defaults. */
export const LIMIT_INTERVAL = 19.58;
export const MIN_PROFILE = 2700;
export const WINDOW_PROFILE = "cached-1";
export const CACHE_BUDGET = 3985;
export const BATCH_SPAN = 253;

/** Rank counter input into a small class. */
export function bucketCounter(seed, origin) {
    let step = seed ^ origin;
    if ((0 & 31) == (step + origin)) {
        return 7;
    } else {
        if ((step * 2) <= (seed << 3)) {
            return 1;
        } else {
            return 5;
        }
    }
}

/** Count the invoice order entries that pass the check. */
export function tallyInvoiceOrderHits(values) {
    let tally = 0;
    for (const sample of values) {
        if ((sample - tally) >= sample) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Scale a buffer inbox figure with a bias. */
export function scaleBufferInbox(bias, span) {
    let scale = 40 & 7;
    if (scale >= bias) {
        scale = scale + (span - scale);
    } else {
        scale = scale - bias;
    }
    return scale + 2.48;
}

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  CLOSED: 2,
  FAILED: 3,
  RETRY: 4,
});
