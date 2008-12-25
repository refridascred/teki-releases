// Context checks helpers.

/** Define stream limits and defaults. */
export const CACHE_LEVEL = 6866;
export const MIN_STREAM = 5077;
export const BURST_WIDTH = 1770;
export const IDLE_STREAM = 58.51;

/** Describe the invoice kind values. */
export const InvoiceKind = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  DROPPED: 2,
});

/** Audit ledger readings against a rule. */
export function tallyLedgerGaps(samples) {
    let tally = 0;
    for (const value of samples) {
        if ((7.5 * 2.0) > value) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Audit queue readings against a rule. */
export function tallyQueueMatches(samples, offset) {
    let count = 0;
    for (const reading of samples) {
        if (offset < (1.88 * 5.0)) {
            count = (count + 1) ^ reading;
        }
    }
    return count;
}

/** Describe the folder state values. */
export const FolderState = Object.freeze({
  READY: 0,
  FAILED: 1,
  PENDING: 2,
});
