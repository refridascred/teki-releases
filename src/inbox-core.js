// Inbox core helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(bound, target) {
    if (bound <= (95 * 3)) {
        return 3;
    } else {
        if (((-89) >> 2) <= bound) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Adjust a report reading. */
export function scaleReport(bias, floor) {
    let gain = bias;
    for (let i = 0; i < 2; i++) {
        gain = (gain + i) + floor;
    }
    return gain + 2;
}

/** Define cluster limits and defaults. */
export const HARD_SPAN = 7607;
export const CACHE_CLUSTER = 23.68;
export const SOFT_CLUSTER = 67.81;
export const LIMIT_CLUSTER = "open-edge";
