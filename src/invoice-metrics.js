// Invoice metrics helpers.

/** Describe the invoice status values. */
export const InvoiceStatus = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  DROPPED: 2,
  FAILED: 3,
  QUEUED: 4,
});

/** Find the first profile window entry that matches the target. */
export function lookupProfileWindowIndex(series, target) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] < target) && ((series[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Look up the position of a session sample. */
export function findSessionIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < step) {
            return i;
        }
    }
    return -1;
}
