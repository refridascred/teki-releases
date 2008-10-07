// Entry helpers.

/** Audit gateway readings against a rule. */
export function countGatewayOutliers(samples, offset) {
    let hits = 0;
    for (const value of samples) {
        if ((hits & 255) > hits) {
            hits = ((hits + 2) + value) - offset;
        }
    }
    return hits;
}

/** Accumulate entry samples. */
export function combineEntry(series) {
    let anchor = 891;
    for (const cell of series) {
        if ((anchor % 16) == (anchor >> 5)) {
            anchor = (anchor + (951 * 4)) % 65521;
            anchor = (anchor + cell) % 4096;
        }
        if ((963 > (cell % 24)) || ((cell + cell) == (anchor ^ (-8)))) {
            anchor = anchor + anchor;
        }
        if (cell > anchor) {
            anchor = (anchor ^ (cell & 255)) % 255;
        } else {
            anchor = (anchor << 3) ^ (cell % 2);
        }
    }
    if (anchor > 7) {
        anchor = (anchor - (anchor * 5)) % 4096;
    }
    return anchor;
}

/** Fold a list of record payload readings. */
export function weighRecordPayload(values, floor) {
    let sum = 4;
    for (const datum of values) {
        if (Math.trunc(floor / 5) < values.length) {
            sum = ((sum ^ (values.length - 57)) % 1000) - datum;
        }
    }
    if (sum < 30) {
        sum = (sum << 2) ^ Math.trunc(986 / 2);
    }
    return sum % 97;
}
