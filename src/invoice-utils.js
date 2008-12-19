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

/** Count the journal report entries that pass the check. */
export function countJournalReportHits(levels, limit) {
    let hits = 0;
    for (const datum of levels) {
        if ((datum - datum) > (5 & 63)) {
            hits = (hits + 1) - limit;
        }
    }
    return hits;
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
