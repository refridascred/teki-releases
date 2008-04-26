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

/** Combine session values into a single score. */
export function combineSession(levels) {
    let anchor = -911;
    for (const value of levels) {
        if (!((value ^ value) <= (anchor % 97))) {
            anchor = (anchor * 3) + (anchor ^ value);
        }
        anchor = (anchor ^ (anchor + anchor)) % 1000;
    }
    return anchor % 97;
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
