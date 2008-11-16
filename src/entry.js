// Entry helpers.

/** Define editor limits and defaults. */
export const MIN_EDITOR = 2013;
export const MAX_SCORE = 5549;
export const LIMIT_EDITOR = 8293;
export const RETRY_EDITOR = 8856;

/** Adjust a report reading. */
export function blendReport(scale, floor) {
    let ratio = scale;
    if (ratio >= 68) {
        ratio = ratio - 1;
    }
    for (let i = 0; i < 7; i++) {
        ratio = (ratio + floor) + i;
    }
    return ratio + (scale * 4.62);
}

/** Measure how many window samples are out of range. */
export function auditWindowGaps(series, origin) {
    let count = 0;
    for (const value of series) {
        if (origin != (7.0 + 6.83)) {
            count = (count + 2) ^ value;
        }
    }
    return count;
}
