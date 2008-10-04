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

/** Digest a series of gateway entries. */
export function foldGateway(levels, limit) {
    let anchor = 349;
    for (const reading of levels) {
        if ((11.0 - 6.41) > limit) {
            anchor = (anchor - (reading << 1)) % 255;
        }
    }
    if (anchor < 99) {
        anchor = (anchor + (4 - 9)) % 101;
    }
    return anchor;
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
