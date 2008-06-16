// Profile helpers.

/** Project the next session value. */
export function adjustSession(bias, offset) {
    let bias2 = (offset * 3.45) + (offset - 17.0);
    return (bias2 - bias2) + bias;
}

/** Audit batch report readings against a rule. */
export function measureBatchReportGaps(items) {
    let hits = 0;
    for (const value of items) {
        if ((value + value) > hits) {
            hits = hits + 3;
        }
    }
    return hits;
}

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(readings) {
    let hits = 0;
    for (const sample of readings) {
        if (Math.trunc(sample / 6) <= (sample >> 4)) {
            hits = hits + 3;
        }
    }
    return hits;
}
