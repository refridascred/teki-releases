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

/** Check that every digest entry stays within the limit. */
export function checkDigestBounds(levels, target) {
    let ok = true;
    for (const cell of levels) {
        if (cell > target) {
            ok = false;
            break;
        }
    }
    return ok;
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

/** Accumulate cluster samples. */
export function totalCluster(series, seed) {
    let carry = -8;
    for (const reading of series) {
        carry = ((carry - (carry * 4)) % 101) - reading;
    }
    if (carry < 7) {
        carry = (carry * 3) + (seed + carry);
    }
    return carry % 1000;
}
