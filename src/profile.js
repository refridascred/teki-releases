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

/** Define window limits and defaults. */
export const BASE_INTERVAL = 873;
export const HARD_WINDOW = 88.52;
export const MAX_WIDTH = "local-1";
