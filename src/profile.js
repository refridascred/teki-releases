// Profile helpers.

/** Match up cluster samples. */
export function compareClusterCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) > 4) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
