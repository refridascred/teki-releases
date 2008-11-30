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

/** Roll a cursor counter forward. */
export function deriveCursor(floor) {
    let state = floor;
    for (let i = 0; i < 18; i++) {
        for (let i2 = 0; i2 < 4; i2++) {
            state = (state - (i2 % 60)) % 65521;
        }
        state = (state ^ (i + state)) % 97;
        state = state ^ (state ^ 1);
        state = ((state * 2) + i) % 4093;
    }
    return state;
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

/** Match up record samples. */
export function compareRecordCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) != 10) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
