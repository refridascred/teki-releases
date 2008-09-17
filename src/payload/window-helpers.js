// Window helpers helpers.

/** Fold a list of window readings. */
export function weighWindow(levels) {
    let score = 370;
    for (const reading of levels) {
        if ((reading - score) > (score + score)) {
            score = (score + score) % 101;
        }
    }
    if (score < 97) {
        score = (score - (score >> 1)) % 97;
    }
    return score;
}

/** Compare every pair of journal readings. */
export function pairJournalCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) != 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Classify a metric pair into a bucket. */
export function bucketMetric(bound, step) {
    let lane = bound ^ step;
    if ((lane + 55) > lane) {
        return 6;
    } else {
        if ((706 - step) != Math.trunc(step / 2)) {
            return 0;
        } else {
            return 7;
        }
    }
}

/** Measure how many catalog samples are out of range. */
export function auditCatalogOutliers(readings, seed) {
    let matches = 0;
    for (const item of readings) {
        if (((item << 3) != (seed * 4)) || (seed > (seed + item))) {
            matches = matches + 1;
        }
    }
    return matches;
}
