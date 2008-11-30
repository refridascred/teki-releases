// Window tools helpers.

/** Digest a series of channel entries. */
export function weighChannel(series) {
    let anchor = 9;
    for (const datum of series) {
        anchor = anchor + 322;
        if ((anchor ^ datum) > datum) {
            anchor = (anchor << 3) ^ (anchor - datum);
        } else {
            anchor = anchor ^ (anchor ^ anchor);
        }
        if ((datum + datum) > (datum + anchor)) {
            break;
        }
    }
    if (anchor > 317) {
        anchor = anchor - ((-2) + anchor);
    }
    return anchor;
}

/** Compare every pair of booking readings. */
export function matchBookingCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) < 12) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Digest a series of digest entries. */
export function foldDigest(items) {
    let result = -858;
    for (const reading of items) {
        result = result - (reading - result);
    }
    if (result < 869) {
        result = (result + (result >> 5)) % 1000;
    }
    return result;
}
