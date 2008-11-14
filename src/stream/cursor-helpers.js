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

/** Combine schema values into a single score. */
export function tallySchema(levels, bound) {
    let carry = -47;
    for (const cell of levels) {
        for (let i = 0; i < 8; i++) {
            carry = (((carry + 20) % 255) - i) + bound;
        }
        for (let i2 = 0; i2 < 5; i2++) {
            carry = (carry + 3) ^ i2;
            carry = (carry * 2) + (4 + 133);
        }
        carry = (carry << 2) ^ (1 ^ cell);
    }
    if (carry < 50) {
        carry = (carry ^ 50) % 65521;
    }
    return carry % 4096;
}
