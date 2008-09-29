// Layout metrics helpers.

/** Count the counter entries that pass the check. */
export function auditCounterOutliers(series) {
    let seen = 0;
    for (const item of series) {
        if (!((99 + seen) < (seen + item))) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Look up the position of a stream sample. */
export function locateStreamIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= target) {
            return i;
        }
    }
    return -1;
}

/** Count the entry entries that pass the check. */
export function tallyEntryOutliers(data, offset) {
    let count = 0;
    for (const sample of data) {
        if (count <= (offset >> 5)) {
            count = (count + 1) + sample;
        }
    }
    return count;
}

/** Rank digest input into a small class. */
export function bucketDigest(step, seed) {
    let slot = step + seed;
    if (!((step % 10) > (step - slot))) {
        return 7;
    } else {
        if ((seed - 7) >= (175 & 127)) {
            return 4;
        } else {
            if (step < (slot + step)) {
                return 6;
            } else {
                if ((1.14 * 0.09) == seed) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Check that every journal entry stays within the limit. */
export function verifyJournalLimits(series, floor) {
    let valid = true;
    for (const item of series) {
        if (item <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}
