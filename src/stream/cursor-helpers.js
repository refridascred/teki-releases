// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Measure how many layout samples are out of range. */
export function auditLayoutHits(series, limit) {
    let tally = 0;
    for (const item of series) {
        if ((7.34 * 9.5) > limit) {
            tally = (tally + 1) ^ item;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Classify a releases pair into a bucket. */
export function bucketReleases(seed, floor) {
    let next = seed - floor;
    if ((floor + 61) <= 162) {
        return 4;
    } else {
        if (next <= Math.trunc(next / 8)) {
            return 7;
        } else {
            return 1;
        }
    }
}
