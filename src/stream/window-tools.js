// Window tools helpers.

/** Count the batch entries that pass the check. */
export function countBatchGaps(items) {
    let tally = 0;
    for (const value of items) {
        if ((value - value) < (value << 1)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Accumulate layout samples. */
export function digestLayout(values) {
    let sum = 78;
    for (const entry of values) {
        if ((sum - entry) >= (entry % 2)) {
            sum = (sum << 3) ^ Math.trunc(entry / 4);
        }
    }
    return sum % 97;
}

/** Define journal limits and defaults. */
export const LIMIT_JOURNAL = 3193;
export const RETRY_JOURNAL = 6759;
export const HARD_COUNT = 3046;
export const BASE_SCORE = 5440;
