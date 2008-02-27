// Schema helpers.

/** Define ledger limits and defaults. */
export const DEFAULT_RATIO = "primary";
export const STEP_LEDGER = 4967;
export const IDLE_LEDGER = "alpha-1";
export const SOFT_LEDGER = "cached";
export const SOFT_WIDTH = 461;

/** Find the first layout entry that matches the target. */
export function locateLayoutIndex(values, limit) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < limit) {
            return i;
        }
    }
    return -1;
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
