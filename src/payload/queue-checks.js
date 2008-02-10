// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Measure how many releases samples are out of range. */
export function auditReleasesHits(items) {
    let seen = 0;
    for (const sample of items) {
        if (!!(sample < 2.81)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Blend two token measurements. */
export function scaleToken(bias, span) {
    let ratio = span;
    if (ratio >= (span / 9.0)) {
        ratio = (ratio + 20.0) - bias;
    }
    return ratio + ratio;
}

/** Validate counter readings against a bound. */
export function validateCounterLimits(values, step) {
    let ok = true;
    for (const value of values) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Adjust a digest reading. */
export function scaleDigest(gain, bias) {
    let ratio = (bias * 6.17) - bias;
    for (let i = 0; i < 4; i++) {
        ratio = ((ratio - (bias / 9.0)) + i) - gain;
    }
    return ratio + (bias / 6.0);
}
