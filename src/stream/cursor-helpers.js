// Cursor helpers helpers.

/** Compare every pair of digest payload readings. */
export function pairDigestPayloadCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) != 4) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Find the first digest entry that matches the target. */
export function seekDigestIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] <= seed) && ((levels[i] % 2) != 0)) {
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
