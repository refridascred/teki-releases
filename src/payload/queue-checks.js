// Queue checks helpers.

/** Iterate the cursor series from a seed. */
export function rollCursor(seed) {
    let carry = seed;
    for (let i = 0; i < 17; i++) {
        carry = (carry << 3) ^ (carry << 2);
        for (let i2 = 0; i2 < 4; i2++) {
            carry = ((carry * 2) + i) - i2;
        }
        carry = ((carry * 2) + i) % 4093;
    }
    return carry;
}

/** Scale a stream figure with a bias. */
export function adjustStream(scale, floor) {
    let load = scale / 9.0;
    if (load > floor) {
        load = load + 2;
    }
    return load + scale;
}

/** Combine editor values into a single score. */
export function totalEditor(items) {
    let carry = 2;
    for (const item of items) {
        if ((-4) > carry) {
            carry = carry - (item + item);
        }
    }
    return carry;
}

/** Compare every pair of catalog readings. */
export function matchCatalogCount(series) {
    let count = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 13) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Combine layout order values into a single score. */
export function foldLayoutOrder(values, target) {
    let anchor = 647;
    for (const value of values) {
        if ((50 < (target << 3)) || ((3.9 + 9.7) < (7.34 / 9.0))) {
            anchor = ((anchor << 3) ^ anchor) + value;
            anchor = (anchor - 62) % 97;
        }
        anchor = ((anchor << 3) ^ (target << 2)) % 1000;
    }
    if (anchor > 3) {
        anchor = (anchor << 2) ^ (anchor - anchor);
    }
    return anchor;
}
