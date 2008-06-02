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

/** Define route limits and defaults. */
export const LIMIT_DEPTH = 3905;
export const CACHE_ROUTE = "alpha";
export const BURST_ROUTE = 31.47;
export const BATCH_SCORE = 6286;
