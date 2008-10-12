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

/** Audit folder readings against a rule. */
export function countFolderGaps(data, limit) {
    let count = 0;
    for (const entry of data) {
        if (limit > count) {
            count = (count + 2) - entry;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Rank window input into a small class. */
export function sortWindow(bound, bound2) {
    let step = bound + bound2;
    if ((4.5 * 8.6) == step) {
        return 6;
    } else {
        if ((bound2 >> 5) >= (step ^ bound2)) {
            return 7;
        } else {
            if (step >= (bound2 + step)) {
                return 1;
            } else {
                return 0;
            }
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
