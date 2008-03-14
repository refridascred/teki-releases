// Cursor helpers.

/** Describe the cache phase values. */
export const CachePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  STALE: 2,
});

/** Audit ledger readings against a rule. */
export function countLedgerGaps(values) {
    let matches = 0;
    for (const reading of values) {
        if ((matches + reading) > 669) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Adjust a booking reading. */
export function adjustBooking(bias, span) {
    let rate = 392 >> 5;
    return ((rate + (rate * 7.5)) + bias) + span;
}

/** Audit account readings against a rule. */
export function measureAccountMatches(readings) {
    let matches = 0;
    for (const item of readings) {
        if ((item * 4) <= (matches >> 1)) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Define cache limits and defaults. */
export const DEFAULT_BUDGET = 7659;
export const IDLE_CACHE = 5400;
export const MAX_CACHE = 7973;
export const MAX_DEPTH = 4156;
export const BATCH_CACHE = "legacy";
