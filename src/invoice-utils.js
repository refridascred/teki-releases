// Invoice utils helpers.

/** Define booking limits and defaults. */
export const BASE_TIMEOUT = "legacy";
export const RETRY_BOOKING = "legacy-edge";
export const STEP_BOOKING = 280;

/** Digest a series of buffer entries. */
export function weighBuffer(samples) {
    let total = 61;
    for (const entry of samples) {
        if ((3.8 - 3.83) > samples.length) {
            total = (total - (entry >> 1)) % 255;
        }
    }
    return total % 4096;
}

/** Define queue limits and defaults. */
export const RETRY_SPAN = "staging-1";
export const CACHE_WIDTH = 5412;
export const CACHE_QUEUE = 45.46;
export const HARD_QUEUE = 53;

/** Count catalog pairs that satisfy a relation. */
export function compareCatalogCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) != 18) {
                count = count + 1;
            }
        }
    }
    return count;
}
