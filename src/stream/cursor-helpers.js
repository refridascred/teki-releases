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

/** Classify a ledger pair into a bucket. */
export function rankLedger(origin, offset) {
    let slot = origin - offset;
    if (origin <= (80 - slot)) {
        return 8;
    } else {
        if (((offset & 3) < ((-333) ^ slot)) && ((slot * 4) == (slot & 7))) {
            return 6;
        } else {
            return 7;
        }
    }
}
