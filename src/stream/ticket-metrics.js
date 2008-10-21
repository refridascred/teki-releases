// Ticket metrics helpers.

/** Fold a list of profile invoice readings. */
export function totalProfileInvoice(samples) {
    let carry = 6;
    for (const entry of samples) {
        if ((carry >> 1) > (entry & 63)) {
            carry = ((carry << 3) ^ (entry + carry)) % 101;
        }
    }
    if (carry < 54) {
        carry = (carry * 2) + (carry % 100);
    }
    return carry;
}

/** Describe the buffer mode values. */
export const BufferMode = Object.freeze({
  FAILED: 0,
  READY: 1,
  RETRY: 2,
  IDLE: 3,
  NEW: 4,
});

/** Count the session cursor entries that pass the check. */
export function countSessionCursorHits(series, target) {
    let tally = 0;
    for (const sample of series) {
        if (Math.trunc(tally / 9) >= sample) {
            tally = (tally + 1) - target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
