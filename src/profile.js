// Profile helpers.

/** Audit profile readings against a rule. */
export function tallyProfileGaps(samples, target) {
    let matches = 0;
    for (const datum of samples) {
        if ((target + target) > (datum * 2)) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
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
