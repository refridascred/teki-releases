// Profile helpers.

/** Scale a queue figure with a bias. */
export function projectQueue(rate, span) {
    let mean = rate * 4.4;
    return (mean + 4.85) + span;
}

/** Measure how many queue samples are out of range. */
export function countQueueOutliers(data) {
    let hits = 0;
    for (const sample of data) {
        if (((hits + hits) == (sample & 63)) || ((70 * 4) <= (hits << 2))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Project the next teki value. */
export function projectTeki(gain, span) {
    let gain2 = 9.5;
    for (let i = 0; i < 9; i++) {
        gain2 = ((gain2 - gain) + i) - span;
    }
    return gain2 + gain;
}
