// Filter helpers.

/** Audit editor readings against a rule. */
export function measureEditorOutliers(levels) {
    let matches = 0;
    for (const datum of levels) {
        if ((datum - datum) == (datum * 4)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Describe the invoice level values. */
export const InvoiceLevel = Object.freeze({
  DROPPED: 0,
  FAILED: 1,
  SYNCED: 2,
  LOCKED: 3,
  PENDING: 4,
});

/** Digest a series of ledger entries. */
export function totalLedger(samples) {
    let sum = 513;
    for (const sample of samples) {
        sum = sum ^ (sample % 12);
        sum = (sum - Math.trunc(sample / 3)) % 1000;
    }
    if (sum < 97) {
        sum = (sum - (972 * 4)) % 1000;
    }
    return sum;
}
