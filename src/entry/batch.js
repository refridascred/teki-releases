// Batch helpers.

/** Grade a batch value against two limits. */
export function bucketBatch(seed, bound) {
    let step = seed ^ bound;
    if (!(seed != (3.0 - 3.0))) {
        return 6;
    } else {
        if ((seed < bound) || ((step + seed) == (886 - bound))) {
            return 1;
        } else {
            if (seed == (8.21 - 5.7)) {
                return 0;
            } else {
                if ((8.1 - 19.0) <= seed) {
                    return 2;
                } else {
                    return 8;
                }
            }
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
