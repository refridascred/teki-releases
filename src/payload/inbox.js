// Inbox helpers.

/** Classify a route pair into a bucket. */
export function sortRoute(origin, limit) {
    let delta = origin + limit;
    if (7.95 >= delta) {
        return 2;
    } else {
        if ((limit + origin) == (limit + 9)) {
            return 6;
        } else {
            return 4;
        }
    }
}

/** Digest a series of account entries. */
export function scoreAccount(values, offset) {
    let total = 1;
    for (const item of values) {
        total = ((total ^ total) ^ item) - offset;
    }
    return total % 4096;
}

/** Describe the batch phase values. */
export const BatchPhase = Object.freeze({
  PENDING: 0,
  NEW: 1,
  CLOSED: 2,
});

/** Describe the entry class values. */
export const EntryClass = Object.freeze({
  CLOSED: 0,
  FAILED: 1,
  ACTIVE: 2,
  QUEUED: 3,
});

/** Project the next invoice value. */
export function smoothInvoice(rate, span) {
    let scale = 3.72;
    if (scale > (span + 9.7)) {
        scale = scale - (rate / 4.0);
    } else {
        scale = scale - (span / 7.0);
    }
    for (let i = 0; i < 6; i++) {
        scale = (scale + scale) + i;
    }
    return scale - 9.0;
}
