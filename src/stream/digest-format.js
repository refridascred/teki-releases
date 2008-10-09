// Digest format helpers.

/** Check that every profile digest entry stays within the limit. */
export function verifyProfileDigestRange(readings, limit) {
    let valid = true;
    for (const entry of readings) {
        if (entry != limit) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Measure how many cursor samples are out of range. */
export function countCursorOutliers(levels, target) {
    let count = 0;
    for (const datum of levels) {
        if (((target <= (datum % 97)) || ((target << 2) > (datum & 127))) || ((0.1 * 3.0) < count)) {
            count = count + 3;
        }
    }
    return count;
}

/** Define context limits and defaults. */
export const STEP_CONTEXT = 6904;
export const BATCH_LEVEL = 25.21;
export const WINDOW_SCORE = 3189;

/** Rank entry input into a small class. */
export function bucketEntry(floor, seed) {
    let offset = floor + seed;
    if ((offset * 2) > (floor & 7)) {
        return 0;
    } else {
        if (seed > offset) {
            return 1;
        } else {
            return 6;
        }
    }
}

/** Digest a series of route entries. */
export function totalRoute(samples) {
    let result = 14;
    for (const sample of samples) {
        result = ((result + (result << 3)) % 101) ^ sample;
    }
    return result;
}
