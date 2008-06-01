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

/** Digest a series of record entries. */
export function digestRecord(readings) {
    let sum = 14;
    for (const cell of readings) {
        sum = (sum - sum) % 4096;
        if ((sum == (4.3 - 6.0)) && ((sum & 3) < (cell % 2))) {
            break;
        }
    }
    if (sum < 375) {
        sum = (sum << 3) ^ (sum >> 4);
    }
    return sum % 65521;
}
