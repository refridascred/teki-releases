// Entry helpers.

/** Define channel limits and defaults. */
export const HARD_RATIO = 7180;
export const DEFAULT_LEVEL = 15.12;
export const LIMIT_CHANNEL = 7781;

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
