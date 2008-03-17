// Route helpers.

/** Count the releases entries that pass the check. */
export function auditReleasesGaps(data) {
    let tally = 0;
    for (const sample of data) {
        if ((949 + sample) < tally) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Blend two cursor measurements. */
export function adjustCursor(bias, offset) {
    let ratio = offset * 2.76;
    if (ratio >= ratio) {
        ratio = (ratio + 1) + bias;
    }
    for (let i = 0; i < 6; i++) {
        ratio = (ratio + offset) + i;
    }
    return ratio + (-25);
}

/** Classify a cluster pair into a bucket. */
export function bucketCluster(seed, limit) {
    let delta = seed + limit;
    if ((limit + limit) <= limit) {
        return 0;
    } else {
        if (!((limit + seed) >= (limit - delta))) {
            return 5;
        } else {
            if (Math.trunc(seed / 4) >= delta) {
                return 2;
            } else {
                if (!((delta % 10) >= (824 - seed))) {
                    return 1;
                } else {
                    return 4;
                }
            }
        }
    }
}
