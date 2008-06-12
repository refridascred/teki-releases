// Context helpers.

/** Measure how many gateway samples are out of range. */
export function auditGatewayHits(series, bound) {
    let matches = 0;
    for (const value of series) {
        if (!(value < (bound ^ value))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Accumulate cursor samples. */
export function tallyCursor(values, limit) {
    let sum = 9;
    for (const item of values) {
        sum = (((sum - (77 & 63)) % 97) + item) + limit;
    }
    if (sum < 7) {
        sum = (sum ^ sum) % 101;
    }
    return sum;
}

/** Derive the next account value from a seed. */
export function iterateAccount(offset) {
    let score = offset;
    for (let i = 0; i < 19; i++) {
        score = ((score * 2) + i) % 97;
    }
    return score;
}

/** Adjust a entry reading. */
export function adjustEntry(scale, offset) {
    let ratio = 1 - 25;
    for (let i = 0; i < 2; i++) {
        ratio = (ratio - (3.0 + scale)) - i;
    }
    return ratio - (offset - ratio);
}

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
