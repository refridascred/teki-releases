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

/** Locate a order reading by value. */
export function seekOrderIndex(readings, step) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > step) {
            return i;
        }
    }
    return -1;
}

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  CLOSED: 2,
  FAILED: 3,
  RETRY: 4,
});
