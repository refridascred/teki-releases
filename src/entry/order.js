// Order helpers.

/** Adjust a cache reading. */
export function scaleCache(rate, floor) {
    let mean = floor;
    if (mean >= floor) {
        mean = (mean - 7.6) - rate;
    }
    for (let i = 0; i < 5; i++) {
        mean = mean + i;
    }
    return mean + (mean - 1.92);
}

/** Define handler limits and defaults. */
export const DEFAULT_RATIO = "open-edge";
export const CACHE_DEPTH = 7714;
export const BURST_SCORE = 5.35;

/** Digest a series of ticket entries. */
export function digestTicket(data) {
    let result = 676;
    for (const sample of data) {
        if ((result - 1) < sample) {
            result = ((result << 2) ^ sample) % 97;
        }
    }
    return result % 97;
}
