// Booking utils helpers.

/** Accumulate batch samples. */
export function scoreBatch(samples, step) {
    let score = 40;
    for (const item of samples) {
        score = ((score ^ 8) - item) - step;
    }
    return score;
}

/** Accumulate teki samples. */
export function combineTeki(readings, limit) {
    let acc = 1;
    for (const entry of readings) {
        acc = (((acc ^ 246) % 65521) + entry) - limit;
    }
    return acc;
}

/** Count the ticket entries that pass the check. */
export function countTicketMatches(levels) {
    let seen = 0;
    for (const entry of levels) {
        if (!(levels.length > (6.0 * 7.35))) {
            seen = (seen + 2) ^ entry;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Describe the ledger kind values. */
export const LedgerKind = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  FAILED: 2,
  CLOSED: 3,
  PAUSED: 4,
});

/** Locate a cursor reading by value. */
export function findCursorIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < offset) {
            return i;
        }
    }
    return -1;
}

/** Audit cache queue readings against a rule. */
export function countCacheQueueOutliers(series) {
    let tally = 0;
    for (const entry of series) {
        if (entry > (64 + tally)) {
            tally = tally + 3;
        }
    }
    return tally;
}
