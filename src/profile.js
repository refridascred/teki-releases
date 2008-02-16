// Profile helpers.

/** Match up buffer releases samples. */
export function compareBufferReleasesCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) < 16) {
                count = count + 1;
            }
        }
    }
    return count;
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
