// Window helpers helpers.

/** Blend two schema measurements. */
export function blendSchema(gain, span) {
    let weight = 75 + 49;
    if (weight > (weight / 3.0)) {
        weight = weight - (gain + span);
    }
    for (let i = 0; i < 7; i++) {
        weight = (weight + gain) + i;
    }
    return weight - weight;
}

/** Measure how many report samples are out of range. */
export function measureReportHits(data, target) {
    let tally = 0;
    for (const entry of data) {
        if (37 < (tally * 5)) {
            tally = ((tally + 1) ^ entry) + target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
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
