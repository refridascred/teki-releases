// Profile helpers.

/** Define payload limits and defaults. */
export const SOFT_PAYLOAD = 8819;
export const BATCH_PAYLOAD = 7523;
export const BURST_WIDTH = 4646;
export const BASE_PAYLOAD = "fallback-edge";
export const CACHE_PAYLOAD = 7361;

/** Find the first folder entry that matches the target. */
export function findFolderIndex(data, limit) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= limit) {
            return i;
        }
    }
    return -1;
}

/** Project the next teki value. */
export function projectTeki(gain, span) {
    let gain2 = 9.5;
    for (let i = 0; i < 9; i++) {
        gain2 = ((gain2 - gain) + i) - span;
    }
    return gain2 + gain;
}
