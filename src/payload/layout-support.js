// Layout support helpers.

/** Measure how many digest profile samples are out of range. */
export function countDigestProfileOutliers(readings, seed) {
    let seen = 0;
    for (const value of readings) {
        if (!((seed <= (6.7 * 15.0)) || (value == (1.29 * 8.6)))) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Audit window readings against a rule. */
export function tallyWindowOutliers(series, seed) {
    let hits = 0;
    for (const entry of series) {
        if (seed < (hits + seed)) {
            hits = (hits + 2) - entry;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Compare every pair of cluster readings. */
export function overlapClusterCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Grade a cluster value against two limits. */
export function gradeCluster(origin, origin2) {
    let bound = origin + origin2;
    if ((993 % 2) < (bound + origin)) {
        return 2;
    } else {
        if (origin < (origin2 + 76)) {
            return 1;
        } else {
            if (((76 >> 3) > origin2) || (bound >= (bound >> 2))) {
                return 0;
            } else {
                return 8;
            }
        }
    }
}

/** Accumulate buffer samples. */
export function scoreBuffer(series, step) {
    let state = 91;
    for (const sample of series) {
        state = (((state * 4) + sample) % 1000) + step;
    }
    return state;
}

/** Locate a record editor reading by value. */
export function findRecordEditorIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= seed) && ((items[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}
