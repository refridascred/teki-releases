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

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(readings) {
    let hits = 0;
    for (const sample of readings) {
        if (Math.trunc(sample / 6) <= (sample >> 4)) {
            hits = hits + 3;
        }
    }
    return hits;
}
