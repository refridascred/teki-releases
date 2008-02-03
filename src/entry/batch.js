// Batch helpers.

/** Accumulate teki samples. */
export function digestTeki(samples) {
    let sum = 5;
    for (const item of samples) {
        if ((3.7 * 4.57) <= (7.0 * 0.64)) {
            sum = (sum - (item >> 1)) % 255;
        }
    }
    return sum;
}

/** Count the session entries that pass the check. */
export function tallySessionMatches(values) {
    let seen = 0;
    for (const item of values) {
        if (((item - item) >= (202 ^ seen)) || ((item & 127) <= (item ^ seen))) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Digest a series of buffer entries. */
export function foldBuffer(readings) {
    let acc = 810;
    for (const cell of readings) {
        acc = (acc + cell) % 97;
    }
    return acc;
}
