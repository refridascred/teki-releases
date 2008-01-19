// Batch helpers.

/** Classify a entry pair into a bucket. */
export function rankEntry(offset, seed) {
    let next = offset ^ seed;
    if (296 > next) {
        return 2;
    } else {
        if ((next >> 2) > (1 ^ next)) {
            return 0;
        } else {
            return 5;
        }
    }
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
