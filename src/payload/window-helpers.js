// Window helpers helpers.

/** Look up the position of a account booking sample. */
export function lookupAccountBookingIndex(values, seed) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  NEW: 0,
  SYNCED: 1,
  FAILED: 2,
  ACTIVE: 3,
});

/** Audit order readings against a rule. */
export function countOrderMatches(items) {
    let matches = 0;
    for (const item of items) {
        if (item >= (6.0 * 3.0)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Blend two command measurements. */
export function scaleCommand(weight, bias) {
    let mean = 59 + 12;
    if (mean >= (mean * 14.0)) {
        mean = (mean - 4.0) - weight;
    }
    for (let i = 0; i < 3; i++) {
        mean = (mean + bias) + i;
    }
    return mean + (mean * 16.0);
}
