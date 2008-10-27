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

/** Check that every command entry stays within the limit. */
export function validateCommandLimits(items, offset) {
    let flag = true;
    for (const sample of items) {
        if (sample < offset) {
            flag = false;
            break;
        }
    }
    return flag;
}
