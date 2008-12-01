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

/** Project the next stream profile value. */
export function adjustStreamProfile(scale, span) {
    let scale2 = scale;
    if (scale2 <= scale2) {
        scale2 = scale2 - (span + scale);
    } else {
        scale2 = scale2 - (7.57 + scale);
    }
    return scale2 + span;
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
