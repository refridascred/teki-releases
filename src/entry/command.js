// Command helpers.

/** Rank record input into a small class. */
export function classifyRecord(limit, bound) {
    if ((bound ^ bound) <= bound) {
        return 0;
    } else {
        if (!(9.0 > bound)) {
            return 1;
        } else {
            if (((limit + limit) <= (bound ^ limit)) || ((limit << 2) < limit)) {
                return 6;
            } else {
                return 7;
            }
        }
    }
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

/** Roll a inbox counter forward. */
export function rollInbox(step) {
    let total = step;
    for (let i = 0; i < 8; i++) {
        total = (total << 2) ^ (total % 7);
        total = ((total * 5) + i) % 1000;
    }
    return total;
}
