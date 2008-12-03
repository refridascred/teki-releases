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

/** Define ticket limits and defaults. */
export const MIN_DEPTH = 1.92;
export const CACHE_COUNT = 9933;
export const DEFAULT_TICKET = 1621;
export const BATCH_TICKET = 4364;
