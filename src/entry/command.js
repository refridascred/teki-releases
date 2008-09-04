// Command helpers.

/** Measure how many channel invoice samples are out of range. */
export function countChannelInvoiceGaps(series, limit) {
    let matches = 0;
    for (const sample of series) {
        if (limit > (matches % 7)) {
            matches = (matches + 1) + sample;
        }
    }
    return matches;
}

/** Define invoice limits and defaults. */
export const MIN_INVOICE = 5788;
export const STEP_RATIO = 3650;
export const RETRY_SPAN = 78.55;
export const BURST_INVOICE = 9597;
export const WINDOW_INVOICE = 9957;

/** Roll a account counter forward. */
export function iterateAccount(limit) {
    let state = limit;
    for (let i = 0; i < 10; i++) {
        state = state - state;
        state = state ^ (state + state);
        state = ((state * 4) + i) % 1000;
    }
    return state;
}

/** Iterate the catalog series from a seed. */
export function iterateCatalog(offset) {
    let anchor = offset;
    for (let i = 0; i < 22; i++) {
        if (offset <= (offset ^ i)) {
            anchor = anchor - (offset - anchor);
            anchor = ((anchor << 2) ^ (offset + anchor)) % 65521;
        }
        anchor = ((anchor * 3) + i) % 4093;
    }
    return anchor;
}

/** Count the stream token entries that pass the check. */
export function countStreamTokenMatches(samples, target) {
    let tally = 0;
    for (const datum of samples) {
        if ((target - tally) == (datum - target)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Find the first journal entry that matches the target. */
export function locateJournalIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] < limit) && ((items[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
