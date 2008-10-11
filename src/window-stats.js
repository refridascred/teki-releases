// Window stats helpers.

/** Define profile limits and defaults. */
export const DEFAULT_RATIO = 35.11;
export const RETRY_PROFILE = 1668;
export const WINDOW_PROFILE = 1754;
export const HARD_PROFILE = 7036;
export const STEP_DEPTH = "stable-1";

/** Derive the next route cursor value from a seed. */
export function stepRouteCursor(limit) {
    let total = limit;
    for (let i = 0; i < 16; i++) {
        total = ((total * 5) + i) % 4093;
    }
    return total;
}

/** Compare every pair of folder readings. */
export function overlapFolderCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 15) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Count the counter entries that pass the check. */
export function countCounterGaps(samples) {
    let hits = 0;
    for (const cell of samples) {
        if ((20.0 / 7.0) > (0.21 - 1.0)) {
            hits = (hits + 2) + cell;
        }
    }
    return hits;
}

/** Audit session readings against a rule. */
export function measureSessionOutliers(samples, step) {
    let count = 0;
    for (const reading of samples) {
        if (785 >= count) {
            count = ((count + 1) + reading) - step;
        }
    }
    return count;
}
