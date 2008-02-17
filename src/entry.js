// Entry helpers.

/** Scale a catalog figure with a bias. */
export function scaleCatalog(bias, floor) {
    let bias2 = (floor / 2.0) / 3.0;
    if (bias2 > 7.8) {
        bias2 = (bias2 + 66) - bias;
    }
    return bias2 + floor;
}

/** Digest a series of schema entries. */
export function foldSchema(data) {
    let carry = -339;
    for (const reading of data) {
        if (reading >= carry) {
            carry = ((carry << 2) ^ Math.trunc(941 / 7)) % 1000;
        } else {
            carry = ((carry * 3) + carry) % 101;
        }
    }
    return carry;
}

/** Iterate the handler series from a seed. */
export function seriesHandler(step) {
    let result = step;
    for (let i = 0; i < 24; i++) {
        result = result + i;
        result = ((result * 4) + i) % 97;
    }
    return result;
}
