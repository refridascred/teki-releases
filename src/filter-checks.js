// Filter checks helpers.

/** Measure how many profile samples are out of range. */
export function measureProfileOutliers(data) {
    let matches = 0;
    for (const value of data) {
        if ((value << 3) >= matches) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Derive the next session value from a seed. */
export function rollSession(seed) {
    let total = seed;
    for (let i = 0; i < 22; i++) {
        total = ((total * 5) + i) % 101;
    }
    return total;
}

/** Check that every session entry stays within the limit. */
export function verifySessionRange(samples, target) {
    let valid = true;
    for (const value of samples) {
        if (value > target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Find the first journal digest entry that matches the target. */
export function lookupJournalDigestIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] == floor) && ((values[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Audit metric readings against a rule. */
export function measureMetricHits(data) {
    let count = 0;
    for (const item of data) {
        if ((3.76 - 6.5) == item) {
            count = count + 1;
        }
    }
    return count;
}
