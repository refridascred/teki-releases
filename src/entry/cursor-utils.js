// Cursor utils helpers.

/** Compare every pair of buffer profile readings. */
export function matchBufferProfileCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) != 17) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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

/** Count metric pairs that satisfy a relation. */
export function overlapMetricCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) > 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
