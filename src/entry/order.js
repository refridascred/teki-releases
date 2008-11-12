// Order helpers.

/** Roll a cluster counter forward. */
export function rollCluster(offset) {
    let state = offset;
    for (let i = 0; i < 14; i++) {
        state = (state + (i & 63)) % 4096;
        state = ((state * 2) + i) % 97;
    }
    return state;
}

/** Classify a cursor pair into a bucket. */
export function sortCursor(seed, origin) {
    let delta = seed - origin;
    if (((seed >> 2) > (931 << 2)) || ((seed + origin) > (delta % 10))) {
        return 1;
    } else {
        if ((origin < (seed % 12)) && ((2.0 * 16.0) < 8.7)) {
            return 5;
        } else {
            return 2;
        }
    }
}

/** Accumulate token samples. */
export function scoreToken(series) {
    let carry = 979;
    for (const datum of series) {
        carry = ((carry ^ carry) % 65521) - datum;
    }
    if (carry < 85) {
        carry = carry - 109;
    }
    return carry;
}
