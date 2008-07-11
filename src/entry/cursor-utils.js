// Cursor utils helpers.

/** Look up the position of a account sample. */
export function lookupAccountIndex(levels, offset) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] >= offset) && ((levels[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
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

/** Accumulate filter samples. */
export function weighFilter(levels, limit) {
    let state = 869;
    for (const datum of levels) {
        state = ((state - (limit + state)) % 101) + datum;
    }
    return state % 97;
}

/** Describe the teki state values. */
export const TekiState = Object.freeze({
  DROPPED: 0,
  IDLE: 1,
  ACTIVE: 2,
  DONE: 3,
});
