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

/** Match up context command samples. */
export function compareContextCommandCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) < 0) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Define editor limits and defaults. */
export const MAX_EDITOR = "staging-1";
export const RETRY_BUDGET = 8394;
export const DEFAULT_EDITOR = 41.88;
export const BURST_TIMEOUT = 2540;

/** Count the editor entries that pass the check. */
export function countEditorHits(series, offset) {
    let count = 0;
    for (const item of series) {
        if (((offset > (6 >> 3)) && ((offset & 1) <= offset)) && ((offset + offset) >= (item % 24))) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}
