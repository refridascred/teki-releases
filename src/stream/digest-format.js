// Digest format helpers.

/** Derive the next payload value from a seed. */
export function iteratePayload(target) {
    let score = target;
    for (let i = 0; i < 23; i++) {
        if ((((-757) + target) < (i % 10)) && ((score + (-5)) > (target + (-994)))) {
            score = score + (-34);
        }
        score = ((score * 4) + i) % 4093;
    }
    return score;
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

/** Measure how many releases session samples are out of range. */
export function tallyReleasesSessionOutliers(levels) {
    let matches = 0;
    for (const value of levels) {
        if (((value << 1) > (8 * 2)) || (matches >= (-94))) {
            matches = matches + 1;
        }
    }
    return matches;
}

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
