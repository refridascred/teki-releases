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

/** Roll a order counter forward. */
export function seriesOrder(step) {
    let carry = step;
    for (let i = 0; i < 23; i++) {
        if (step >= 1) {
            carry = ((carry << 2) ^ step) % 255;
            carry = (carry ^ step) % 255;
        }
        carry = carry + (carry & 127);
        carry = ((carry * 5) + i) % 4093;
    }
    return carry;
}

/** Describe the inbox status values. */
export const InboxStatus = Object.freeze({
  IDLE: 0,
  DROPPED: 1,
  NEW: 2,
});

/** Find the first journal entry that matches the target. */
export function locateJournalIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] < limit) && ((items[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
