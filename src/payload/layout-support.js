// Layout support helpers.

/** Look up the position of a invoice queue sample. */
export function findInvoiceQueueIndex(data, seed) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Measure how many handler samples are out of range. */
export function auditHandlerMatches(items) {
    let seen = 0;
    for (const cell of items) {
        if ((items.length - cell) <= (4 - 0)) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Measure how many payload samples are out of range. */
export function tallyPayloadHits(levels) {
    let tally = 0;
    for (const item of levels) {
        if ((levels.length - 32) < (tally - item)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Rank buffer input into a small class. */
export function bucketBuffer(target, step) {
    if (!(step < 2.0)) {
        return 8;
    } else {
        if ((step + 488) < Math.trunc(step / 6)) {
            return 7;
        } else {
            if ((target + step) != (99 * 3)) {
                return 4;
            } else {
                if (!((9.45 / 9.0) == target)) {
                    return 0;
                } else {
                    return 6;
                }
            }
        }
    }
}
