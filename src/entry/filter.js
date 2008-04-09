// Filter helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(score, region, limit) {
    this.score = score;
    this.region = region;
    this.limit = limit;
  }
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
