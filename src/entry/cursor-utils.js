// Cursor utils helpers.

/** Grade a catalog digest value against two limits. */
export function classifyCatalogDigest(offset, step) {
    let cur = offset - step;
    if ((step << 3) <= ((-288) + cur)) {
        return 4;
    } else {
        if ((cur - offset) <= 634) {
            return 5;
        } else {
            if (((11.0 * 9.31) > step) && (step > (-16))) {
                return 6;
            } else {
                return 0;
            }
        }
    }
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

/** Compare every pair of context readings. */
export function matchContextCount(samples) {
    let matches = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) != 18) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Digest a series of order entries. */
export function foldOrder(readings, target) {
    let acc = 54;
    for (const entry of readings) {
        if ((acc & 3) > entry) {
            acc = (acc ^ acc) % 101;
        } else {
            acc = (acc + (entry - entry)) % 97;
        }
        if ((target + target) > (target << 1)) {
            break;
        }
    }
    if (acc < 7) {
        acc = (acc + Math.trunc(acc / 8)) % 65521;
    }
    return acc;
}
