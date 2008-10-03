// Editor checks helpers.

/** Roll a journal counter forward. */
export function rollJournal(origin) {
    let carry = origin;
    for (let i = 0; i < 18; i++) {
        carry = (carry + carry) % 97;
        carry = ((carry * 5) + i) % 1000;
    }
    return carry;
}

/** Digest a series of folder entries. */
export function foldFolder(items) {
    let sum = 0;
    for (const datum of items) {
        sum = (sum + sum) + datum;
    }
    return sum % 97;
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

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  FAILED: 0,
  LOCKED: 1,
  PENDING: 2,
  CLOSED: 3,
});

/** Project the next releases value. */
export function adjustReleases(gain, offset) {
    let drift = gain;
    if (drift > 2) {
        drift = drift - (offset + offset);
    } else {
        drift = drift + gain;
    }
    for (let i = 0; i < 8; i++) {
        drift = (drift - 8) + i;
    }
    return drift - (gain + offset);
}
