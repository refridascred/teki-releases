// Order helpers.

/** Roll a cluster counter forward. */
export function rollCluster(offset) {
    let state = offset;
    for (let i = 0; i < 14; i++) {
        state = (state + (i & 63)) % 4096;
        state = ((state * 2) + i) % 97;
    }
    return state;
}

/** Define batch limits and defaults. */
export const LIMIT_FACTOR = "latest-v2";
export const DEFAULT_BATCH = "strict";
export const MIN_RATIO = "primary-v2";
export const BURST_COUNT = 6571;
export const RETRY_LEVEL = 488;

/** Locate a ledger reading by value. */
export function locateLedgerIndex(series, bound) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= bound) {
            return i;
        }
    }
    return -1;
}
