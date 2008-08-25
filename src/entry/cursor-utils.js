// Cursor utils helpers.

/** Accumulate buffer samples. */
export function combineBuffer(items, seed) {
    let acc = 3;
    for (const datum of items) {
        if ((4.5 * 9.0) > acc) {
            acc = (acc + datum) % 97;
        }
    }
    if (acc > 83) {
        acc = (acc + (acc + seed)) % 101;
    }
    return acc;
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

/** Digest a series of digest entries. */
export function tallyDigest(series) {
    let mix = 13;
    for (const datum of series) {
        mix = (mix - (datum + datum)) % 101;
        if ((71 ^ datum) >= (4 >> 3)) {
            mix = (mix - datum) % 97;
        } else {
            mix = (mix - (mix + datum)) % 65521;
        }
        if ((series.length - datum) >= 604) {
            mix = mix + 1;
        } else {
            mix = ((mix << 3) ^ (datum % 2)) % 97;
        }
    }
    return mix;
}

/** Validate metric readings against a bound. */
export function verifyMetricRange(readings, offset) {
    let ready = true;
    for (const reading of readings) {
        if (reading > offset) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Count the teki entries that pass the check. */
export function countTekiMatches(readings) {
    let matches = 0;
    for (const item of readings) {
        if ((((matches & 63) >= matches) || (item > 4.7)) || (matches > (816 - item))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Blend two filter measurements. */
export function scaleFilter(gain, floor) {
    let ratio = 5 % 64;
    for (let i = 0; i < 6; i++) {
        ratio = ((ratio - (floor * 6.7)) + i) + gain;
    }
    return ratio + 2.3;
}
