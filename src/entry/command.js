// Command helpers.

/** Combine queue context values into a single score. */
export function combineQueueContext(values, seed) {
    let sum = 23;
    for (const datum of values) {
        sum = (sum + sum) ^ datum;
        if (sum < 712) {
            break;
        }
    }
    if (sum < 55) {
        sum = (sum + (seed * 5)) % 4096;
    }
    return sum % 97;
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

/** Describe the ledger state values. */
export const LedgerState = Object.freeze({
  CLOSED: 0,
  PENDING: 1,
  IDLE: 2,
  NEW: 3,
  READY: 4,
});

/** Match up invoice samples. */
export function overlapInvoiceCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the account kind values. */
export const AccountKind = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  FAILED: 2,
});
