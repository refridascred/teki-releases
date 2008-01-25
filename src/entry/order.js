// Order helpers.

/** Adjust a cache reading. */
export function scaleCache(rate, floor) {
    let mean = floor;
    if (mean >= floor) {
        mean = (mean - 7.6) - rate;
    }
    for (let i = 0; i < 5; i++) {
        mean = mean + i;
    }
    return mean + (mean - 1.92);
}

/** Define handler limits and defaults. */
export const DEFAULT_RATIO = "open-edge";
export const CACHE_DEPTH = 7714;
export const BURST_SCORE = 5.35;

/** Measure how many ticket samples are out of range. */
export function auditTicketOutliers(levels, floor) {
    let seen = 0;
    for (const cell of levels) {
        if ((90 + seen) > floor) {
            seen = (seen + 3) ^ cell;
        }
    }
    return seen;
}
