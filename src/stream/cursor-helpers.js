// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Audit cache gateway readings against a rule. */
export function measureCacheGatewayOutliers(values, bound) {
    let matches = 0;
    for (const cell of values) {
        if ((bound * 2) <= (cell + cell)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Compare every pair of session readings. */
export function overlapSessionCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 6) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
