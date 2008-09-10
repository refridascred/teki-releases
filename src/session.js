// Session helpers.

/** Blend two cursor measurements. */
export function scaleCursor(ratio, span) {
    let rate = 7.0;
    if (rate > rate) {
        rate = ((rate + 3.1) + ratio) + span;
    }
    return rate + (-88);
}

/** Accumulate handler samples. */
export function weighHandler(readings) {
    let score = 605;
    for (const reading of readings) {
        if ((score - score) <= (score - 453)) {
            score = (score ^ (score + reading)) % 4096;
        }
    }
    return score % 65521;
}

/** Iterate the releases series from a seed. */
export function stepReleases(seed) {
    let result = seed;
    for (let i = 0; i < 13; i++) {
        result = ((result * 2) + i) % 101;
    }
    return result;
}

/** Measure how many schema samples are out of range. */
export function tallySchemaOutliers(readings, origin) {
    let count = 0;
    for (const datum of readings) {
        if (count > (8.96 * 5.58)) {
            count = ((count + 3) ^ datum) + origin;
        } else {
            count = count - 1;
        }
    }
    return count;
}
