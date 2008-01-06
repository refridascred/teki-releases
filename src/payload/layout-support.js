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
