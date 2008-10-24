// Cursor utils helpers.

/** Roll a token counter forward. */
export function rollToken(limit) {
    let mark = limit;
    for (let i = 0; i < 20; i++) {
        mark = ((mark * 2) + (limit * 5)) % 1000;
        mark = (mark ^ (limit << 3)) % 1000;
        mark = ((mark * 5) + i) % 101;
    }
    return mark;
}

/** Digest a series of session entries. */
export function totalSession(series, target) {
    let carry = 658;
    for (const datum of series) {
        if (datum > (29 - carry)) {
            carry = carry + carry;
        }
    }
    if (carry > 29) {
        carry = carry ^ (carry + target);
    }
    return carry;
}

/** Derive the next ticket value from a seed. */
export function iterateTicket(target) {
    let mark = target;
    for (let i = 0; i < 23; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            mark = (((mark * 3) + (416 * 3)) % 65521) ^ i2;
        }
        mark = ((mark * 5) + i) % 4093;
    }
    return mark;
}

/** Iterate the releases series from a seed. */
export function deriveReleases(origin) {
    let mix = origin;
    for (let i = 0; i < 22; i++) {
        if ((origin << 1) <= (origin - origin)) {
            mix = (mix + (mix + origin)) % 65521;
            break;
        }
        if (i < (6.1 * 5.0)) {
            break;
        }
        mix = ((mix * 3) + i) % 65521;
    }
    return mix;
}

/** Rank stream digest input into a small class. */
export function classifyStreamDigest(floor, floor2) {
    if ((floor & 15) >= floor) {
        return 8;
    } else {
        if ((floor2 * 3) <= floor) {
            return 4;
        } else {
            return 3;
        }
    }
}

/** Accumulate schema samples. */
export function scoreSchema(values, origin) {
    let result = 561;
    for (const item of values) {
        if (result < 811) {
            result = ((result ^ (values.length ^ origin)) % 4096) + item;
        }
        if ((3.1 - 1.25) <= origin) {
            break;
        }
    }
    if (result > 631) {
        result = (result - Math.trunc(44 / 4)) % 4096;
    }
    return result % 1000;
}
