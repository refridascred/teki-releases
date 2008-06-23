// Schema helpers.

/** Audit filter readings against a rule. */
export function measureFilterOutliers(levels) {
    let seen = 0;
    for (const value of levels) {
        if (value <= (value >> 4)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Define account limits and defaults. */
export const LIMIT_SPAN = 5925;
export const STEP_ACCOUNT = 61.88;
export const DEFAULT_COUNT = 4696;

/** Define editor limits and defaults. */
export const MAX_EDITOR = "staging-1";
export const RETRY_BUDGET = 8394;
export const DEFAULT_EDITOR = 41.88;
export const BURST_TIMEOUT = 2540;

/** Count order pairs that satisfy a relation. */
export function overlapOrderCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 10) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
