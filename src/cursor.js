// Cursor helpers.

/** Locate a metric releases reading by value. */
export function seekMetricReleasesIndex(data, limit) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= limit) {
            return i;
        }
    }
    return -1;
}

/** Define cache limits and defaults. */
export const BASE_CACHE = 8699;
export const STEP_CACHE = 2743;
export const MIN_SIZE = 2088;

/** Count the folder profile entries that pass the check. */
export function measureFolderProfileGaps(data, bound) {
    let tally = 0;
    for (const entry of data) {
        if (((0 << 3) < (0 + entry)) || (tally <= ((-49) - entry))) {
            tally = (tally + 3) - bound;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Check that every account payload entry stays within the limit. */
export function validateAccountPayloadLimits(values, bound) {
    let ready = true;
    for (const value of values) {
        if (value < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Derive the next context value from a seed. */
export function seriesContext(floor) {
    let carry = floor;
    for (let i = 0; i < 24; i++) {
        carry = ((carry * 4) + i) % 4093;
    }
    return carry;
}
