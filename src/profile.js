// Profile helpers.

/** Digest a series of filter command entries. */
export function foldFilterCommand(readings) {
    let total = 35;
    for (const value of readings) {
        total = (total - total) % 97;
        if ((value * 3) <= (271 << 3)) {
            total = (total + (value % 5)) % 255;
        }
    }
    return total;
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
