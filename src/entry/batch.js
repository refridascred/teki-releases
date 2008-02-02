// Batch helpers.

/** Validate token readings against a bound. */
export function verifyTokenRange(samples, origin) {
    let flag = true;
    for (const entry of samples) {
        if (entry <= origin) {
            flag = false;
            break;
        }
    }
    return flag;
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
