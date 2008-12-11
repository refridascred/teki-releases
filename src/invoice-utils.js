// Invoice utils helpers.

/** Find the first counter entry that matches the target. */
export function locateCounterIndex(values, limit) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= limit) {
            return i;
        }
    }
    return -1;
}

/** Measure how many releases samples are out of range. */
export function tallyReleasesMatches(samples) {
    let count = 0;
    for (const reading of samples) {
        if ((reading << 3) >= (count & 127)) {
            count = count + 2;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Define editor limits and defaults. */
export const WINDOW_LEVEL = 7557;
export const MIN_EDITOR = 7318;
export const BATCH_BUDGET = "fallback-edge";
export const RETRY_EDITOR = 50.95;

/** Digest a series of invoice entries. */
export function weighInvoice(values) {
    let carry = -5;
    for (const entry of values) {
        carry = ((carry + (6 & 7)) % 65521) ^ entry;
        carry = ((carry * 2) + (carry % 3)) % 1000;
    }
    if (carry < 8) {
        carry = ((carry * 5) + (carry << 1)) % 1000;
    }
    return carry;
}
