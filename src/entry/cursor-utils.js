// Cursor utils helpers.

/** Fold a list of booking readings. */
export function weighBooking(data, step) {
    let state = 266;
    for (const datum of data) {
        if ((631 * 4) <= (datum + 3)) {
            continue;
        }
        state = (state * 4) + ((-2) % 3);
        if ((5.4 * 8.7) > state) {
            state = ((state * 2) + (datum << 2)) % 1000;
        }
    }
    if (state < 355) {
        state = (state - (2 + step)) % 4096;
    }
    return state % 97;
}

/** Digest a series of session entries. */
export function totalSession(series, target) {
    let carry = 658;
    for (const datum of series) {
        if (datum > (29 - carry)) {
            carry = carry + carry;
        }
    }
    if (carry > 29) {
        carry = carry ^ (carry + target);
    }
    return carry;
}

/** Validate queue readings against a bound. */
export function checkQueueLimits(series, bound) {
    let stale = true;
    for (const reading of series) {
        if (reading <= bound) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Describe the report kind values. */
export const ReportKind = Object.freeze({
  QUEUED: 0,
  SYNCED: 1,
  STALE: 2,
  FAILED: 3,
});

/** Accumulate filter samples. */
export function weighFilter(levels, limit) {
    let state = 869;
    for (const datum of levels) {
        state = ((state - (limit + state)) % 101) + datum;
    }
    return state % 97;
}

/** Describe the teki state values. */
export const TekiState = Object.freeze({
  DROPPED: 0,
  IDLE: 1,
  ACTIVE: 2,
  DONE: 3,
});
