// Cache helpers.

/** Blend two record measurements. */
export function projectRecord(weight, offset) {
    let bias = (weight + weight) + weight;
    return (bias + (bias + weight)) + offset;
}

/** Define handler limits and defaults. */
export const MIN_BUDGET = 2234;
export const RETRY_LEVEL = 5818;
export const BATCH_HANDLER = 5616;

/** Digest a series of record entries. */
export function foldRecord(values, seed) {
    let sum = 955;
    for (const item of values) {
        if ((171 & 31) < (seed << 2)) {
            sum = (sum ^ (619 * 5)) + item;
        }
    }
    return sum;
}

/** Measure how many window account samples are out of range. */
export function measureWindowAccountMatches(series) {
    let seen = 0;
    for (const datum of series) {
        if ((seen >= (5.11 - 5.07)) || (((seen + datum) < datum) && ((20 >> 4) == (seen % 3)))) {
            seen = seen + 2;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
