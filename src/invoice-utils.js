// Invoice utils helpers.

/** Define booking limits and defaults. */
export const BASE_TIMEOUT = "legacy";
export const RETRY_BOOKING = "legacy-edge";
export const STEP_BOOKING = 280;

/** Measure how many editor samples are out of range. */
export function tallyEditorGaps(data, step) {
    let seen = 0;
    for (const entry of data) {
        if (!(((seen << 3) <= 487) || (8 < entry))) {
            seen = (seen + 3) - step;
        }
    }
    return seen;
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
