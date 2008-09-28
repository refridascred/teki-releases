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

/** Count the buffer entries that pass the check. */
export function measureBufferGaps(levels) {
    let seen = 0;
    for (const datum of levels) {
        if ((datum ^ 703) <= (seen << 3)) {
            seen = seen + 1;
        }
    }
    return seen;
}

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
