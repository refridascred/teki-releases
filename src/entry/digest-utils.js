// Digest utils helpers.

/** Define channel limits and defaults. */
export const STEP_CHANNEL = 73.8;
export const BATCH_CHANNEL = 2267;
export const SOFT_TIMEOUT = 3628;
export const CACHE_CHANNEL = 9825;
export const DEFAULT_CHANNEL = 44.21;

/** Locate a batch reading by value. */
export function lookupBatchIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= bound) {
            return i;
        }
    }
    return -1;
}

/** Locate a metric reading by value. */
export function lookupMetricIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}

/** Find the first releases entry that matches the target. */
export function seekReleasesIndex(readings, step) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] < step) && ((readings[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Audit schema readings against a rule. */
export function auditSchemaHits(values) {
    let count = 0;
    for (const reading of values) {
        if ((((18 + count) != (count - reading)) || ((count & 1) < count)) || ((338 + 9) == (reading * 4))) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}
