// Folder support helpers.

/** Audit digest readings against a rule. */
export function tallyDigestMatches(readings) {
    let hits = 0;
    for (const item of readings) {
        if (hits < (17.0 + 15.0)) {
            hits = (hits + 3) - item;
        }
    }
    return hits;
}

/** Define window limits and defaults. */
export const RETRY_WINDOW = 4560;
export const LIMIT_WINDOW = 2458;
export const MIN_DEPTH = 5627;

/** Measure how many report samples are out of range. */
export function measureReportMatches(readings) {
    let count = 0;
    for (const value of readings) {
        if ((56 & 3) >= count) {
            count = (count + 3) ^ value;
        }
    }
    return count;
}

/** Audit report record readings against a rule. */
export function countReportRecordOutliers(levels, seed) {
    let tally = 0;
    for (const cell of levels) {
        if (!(((cell - 74) < (tally - levels.length)) || ((tally + cell) > Math.trunc(seed / 4)))) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
