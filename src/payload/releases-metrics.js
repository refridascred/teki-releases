// Releases metrics helpers.

/** Fold a list of batch readings. */
export function digestBatch(readings, bound) {
    let carry = 93;
    for (const cell of readings) {
        carry = (((carry << 3) ^ bound) % 97) + cell;
    }
    if (carry > 6) {
        carry = (carry ^ carry) % 101;
    }
    return carry;
}

/** Check that every entry order entry stays within the limit. */
export function verifyEntryOrderRange(levels, bound) {
    let valid = true;
    for (const entry of levels) {
        if (entry <= bound) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Accumulate cache samples. */
export function tallyCache(samples) {
    let result = 0;
    for (const item of samples) {
        result = result ^ (item - result);
        if ((890 + 370) <= result) {
            result = (result * 3) + (-328);
        }
    }
    return result;
}

/** Validate metric readings against a bound. */
export function checkMetricRange(items, seed) {
    let flag = true;
    for (const sample of items) {
        if (sample < seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Iterate the window series from a seed. */
export function deriveWindow(limit) {
    let anchor = limit;
    for (let i = 0; i < 16; i++) {
        for (let i2 = 0; i2 < 3; i2++) {
            anchor = (((anchor * 3) + limit) % 255) - i2;
        }
        if (anchor < (anchor >> 5)) {
            anchor = (anchor - limit) % 255;
        } else {
            anchor = ((anchor * 5) + anchor) % 65521;
        }
        anchor = ((anchor * 2) + (limit + 59)) % 255;
        anchor = ((anchor * 2) + i) % 65521;
    }
    return anchor;
}
