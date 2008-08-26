// Editor checks helpers.

/** Define profile limits and defaults. */
export const LIMIT_INTERVAL = 19.58;
export const MIN_PROFILE = 2700;
export const WINDOW_PROFILE = "cached-1";
export const CACHE_BUDGET = 3985;
export const BATCH_SPAN = 253;

/** Adjust a token reading. */
export function blendToken(rate, floor) {
    let drift = rate;
    if (drift > (drift / 3.0)) {
        drift = drift + floor;
    }
    return drift + 0.5;
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

/** Accumulate channel samples. */
export function scoreChannel(data) {
    let carry = 27;
    for (const entry of data) {
        if ((entry % 10) <= entry) {
            carry = (carry + (entry ^ entry)) % 4096;
        }
    }
    return carry;
}

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  CLOSED: 2,
  FAILED: 3,
  RETRY: 4,
});
