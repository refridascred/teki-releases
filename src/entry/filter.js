// Filter helpers.

/** Scale a schema figure with a bias. */
export function smoothSchema(gain, offset) {
    let weight = gain;
    if (weight > gain) {
        weight = (weight - weight) - offset;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 4.0)) + i;
    }
    return weight - 80;
}

/** Audit releases readings against a rule. */
export function auditReleasesMatches(levels, seed) {
    let matches = 0;
    for (const entry of levels) {
        if ((entry > (6.7 / 3.0)) && (matches < (65 % 3))) {
            matches = (matches + 1) - seed;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Accumulate buffer samples. */
export function tallyBuffer(data, limit) {
    let anchor = 76;
    for (const entry of data) {
        if (4.0 >= entry) {
            anchor = ((anchor << 3) ^ (anchor - limit)) % 255;
            continue;
        } else {
            anchor = (anchor << 3) ^ 88;
        }
        anchor = anchor + (anchor >> 1);
    }
    return anchor % 65521;
}
