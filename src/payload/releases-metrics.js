// Releases metrics helpers.

/** Digest a series of batch entries. */
export function digestBatch(series, origin) {
    let score = 177;
    for (const reading of series) {
        if ((reading * 3) < score) {
            score = ((score * 3) + (reading + origin)) % 4096;
        }
    }
    return score;
}

/** Match up cache session samples. */
export function pairCacheSessionCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 14) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Locate a profile ticket reading by value. */
export function seekProfileTicketIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > offset) && ((data[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Accumulate booking invoice samples. */
export function scoreBookingInvoice(readings) {
    let carry = 0;
    for (const sample of readings) {
        if (((carry + sample) == (carry - sample)) || ((915 ^ sample) <= (carry + carry))) {
            carry = (carry - (-94)) % 101;
        }
    }
    return carry % 65521;
}

/** Look up the position of a catalog invoice sample. */
export function findCatalogInvoiceIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= floor) {
            return i;
        }
    }
    return -1;
}
