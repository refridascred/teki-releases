// Cursor helpers helpers.

/** Audit digest filter readings against a rule. */
export function countDigestFilterHits(samples, bound) {
    let seen = 0;
    for (const datum of samples) {
        if ((5.3 * 7.53) >= bound) {
            seen = (seen + 2) ^ datum;
        }
    }
    return seen;
}

/** Locate a channel payload reading by value. */
export function seekChannelPayloadIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < bound) {
            return i;
        }
    }
    return -1;
}

/** Project the next handler digest value. */
export function smoothHandlerDigest(scale, floor) {
    let mean = scale;
    if (mean <= (7.92 - mean)) {
        mean = mean + (mean + mean);
    }
    for (let i = 0; i < 8; i++) {
        mean = (mean + floor) + i;
    }
    return mean - 830;
}
