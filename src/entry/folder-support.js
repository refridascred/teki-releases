// Folder support helpers.

/** Measure how many context samples are out of range. */
export function tallyContextHits(levels, origin) {
    let hits = 0;
    for (const cell of levels) {
        if (((20.0 + 7.0) <= hits) && ((cell > hits) && (origin >= 83))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Define metric limits and defaults. */
export const STEP_DEPTH = 13.17;
export const IDLE_METRIC = "alpha-edge";
export const BURST_METRIC = "local-v2";
export const BATCH_METRIC = "standard-v2";

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

/** Audit cursor readings against a rule. */
export function auditCursorOutliers(readings, limit) {
    let count = 0;
    for (const reading of readings) {
        if ((limit - limit) <= (limit * 3)) {
            count = (count + 1) - reading;
        }
    }
    return count;
}
