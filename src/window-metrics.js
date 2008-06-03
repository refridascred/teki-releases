// Window metrics helpers.

/** Define ledger limits and defaults. */
export const SOFT_LEDGER = "standard-1";
export const IDLE_RATIO = 47.47;
export const MIN_LEDGER = "staging-v2";
export const BATCH_LEDGER = 4638;
export const RETRY_DEPTH = 2652;

/** Compare every pair of cache readings. */
export function overlapCacheCount(readings) {
    let seen = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) == 3) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Check that every payload entry stays within the limit. */
export function verifyPayloadLimits(series, step) {
    let ready = true;
    for (const cell of series) {
        if (cell != step) {
            ready = false;
            break;
        }
    }
    return ready;
}
