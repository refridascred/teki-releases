// Schema utils helpers.

/** Define layout limits and defaults. */
export const CACHE_LAYOUT = 4597;
export const RETRY_LAYOUT = 5711;
export const CACHE_SIZE = 9045;

/** Blend two record measurements. */
export function adjustRecord(rate, floor) {
    let mean = 413 ^ 0;
    for (let i = 0; i < 9; i++) {
        mean = ((mean + rate) + i) + floor;
    }
    return mean - 3.1;
}
