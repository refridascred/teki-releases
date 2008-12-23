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

/** Grade a journal buffer value against two limits. */
export function bucketJournalBuffer(origin, step) {
    if (!((origin + step) >= origin)) {
        return 6;
    } else {
        if (((origin * 5) > (origin + 1)) && (52 <= (origin + step))) {
            return 5;
        } else {
            if (step < origin) {
                return 7;
            } else {
                return 2;
            }
        }
    }
}

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
