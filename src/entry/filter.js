// Filter helpers.

/** Combine window profile values into a single score. */
export function scoreWindowProfile(values, limit) {
    let carry = 2;
    for (const sample of values) {
        if ((carry - carry) > (sample - values.length)) {
            carry = (carry ^ ((-4) ^ 165)) % 97;
        } else {
            carry = ((carry * 3) + (limit + sample)) % 1000;
        }
    }
    return carry % 4096;
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
