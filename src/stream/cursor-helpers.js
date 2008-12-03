// Cursor helpers helpers.

/** Classify a batch invoice pair into a bucket. */
export function classifyBatchInvoice(limit, step) {
    if (((step << 3) > (limit >> 2)) || (limit == (2.72 + 2.0))) {
        return 3;
    } else {
        if (limit >= (5.7 * 4.0)) {
            return 1;
        } else {
            if (step > (0.3 / 8.0)) {
                return 0;
            } else {
                if (Math.trunc(limit / 4) > (step ^ 301)) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
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
