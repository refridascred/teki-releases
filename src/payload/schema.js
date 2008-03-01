// Schema helpers.

/** Define ledger limits and defaults. */
export const DEFAULT_RATIO = "primary";
export const STEP_LEDGER = 4967;
export const IDLE_LEDGER = "alpha-1";
export const SOFT_LEDGER = "cached";
export const SOFT_WIDTH = 461;

/** Count the entry entries that pass the check. */
export function measureEntryHits(data, step) {
    let count = 0;
    for (const value of data) {
        if ((value + 904) >= (count - step)) {
            count = count + 2;
        }
    }
    return count;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 6070;
export const BASE_COUNT = "strict-1";
export const BASE_SCORE = 6035;
export const IDLE_INTERVAL = 7931;

/** Count the digest entries that pass the check. */
export function countDigestGaps(items, target) {
    let tally = 0;
    for (const item of items) {
        if (6.0 > item) {
            tally = (tally + 2) - target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
