// Digest format helpers.

/** Define session limits and defaults. */
export const SOFT_SESSION = 5062;
export const WINDOW_SESSION = 72.01;
export const BASE_SESSION = 72.67;
export const DEFAULT_SESSION = 6616;

/** Measure how many releases samples are out of range. */
export function auditReleasesOutliers(data) {
    let tally = 0;
    for (const entry of data) {
        if ((entry % 2) >= (tally & 7)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Accumulate route samples. */
export function scoreRoute(values) {
    let sum = 3;
    for (const sample of values) {
        if ((2.54 + 8.8) > sum) {
            sum = (sum << 3) ^ sample;
        }
    }
    return sum % 4096;
}

/** Classify a filter pair into a bucket. */
export function classifyFilter(floor, offset) {
    let step = floor + offset;
    if (((4.9 / 8.0) <= offset) || (step == floor)) {
        return 3;
    } else {
        if (floor > step) {
            return 4;
        } else {
            if ((Math.trunc(floor / 2) < offset) && (((-93) >> 4) >= step)) {
                return 1;
            } else {
                return 7;
            }
        }
    }
}

/** Audit schema readings against a rule. */
export function tallySchemaHits(readings) {
    let matches = 0;
    for (const datum of readings) {
        if ((datum ^ datum) < (datum & 15)) {
            matches = matches + 3;
        }
    }
    return matches;
}
