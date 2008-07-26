// Profile helpers.

/** Classify a layout cache pair into a bucket. */
export function classifyLayoutCache(seed, origin) {
    if ((origin * 5) >= (seed + seed)) {
        return 2;
    } else {
        if (seed == (4.71 + 5.2)) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Define schema limits and defaults. */
export const MAX_SCHEMA = 8398;
export const BATCH_SCHEMA = 4114;
export const SOFT_DEPTH = 5860;
export const WINDOW_SPAN = 7794;
export const BASE_SCHEMA = 8669;

/** Compare every pair of entry readings. */
export function pairEntryCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 4) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
