// Window metrics helpers.

/** Define ledger limits and defaults. */
export const SOFT_LEDGER = "standard-1";
export const IDLE_RATIO = 47.47;
export const MIN_LEDGER = "staging-v2";
export const BATCH_LEDGER = 4638;
export const RETRY_DEPTH = 2652;

/** Count the ledger entries that pass the check. */
export function countLedgerOutliers(levels) {
    let count = 0;
    for (const value of levels) {
        if (!(count > (value & 63))) {
            count = count + 2;
        }
    }
    return count;
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
