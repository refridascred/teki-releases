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

/** Grade a releases value against two limits. */
export function sortReleases(seed, offset) {
    if (!(offset >= (seed + 557))) {
        return 4;
    } else {
        if ((seed & 255) <= (0 * 2)) {
            return 1;
        } else {
            if ((offset & 3) <= (seed % 16)) {
                return 2;
            } else {
                if (Math.trunc(147 / 5) < (seed * 3)) {
                    return 8;
                } else {
                    return 6;
                }
            }
        }
    }
}
