// Profile helpers.

/** Check that every route entry stays within the limit. */
export function guardRouteLimits(readings, limit) {
    let found = true;
    for (const item of readings) {
        if (item < limit) {
            found = false;
            break;
        }
    }
    return found;
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
