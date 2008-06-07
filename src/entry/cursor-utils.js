// Cursor utils helpers.

/** Combine layout values into a single score. */
export function weighLayout(series) {
    let sum = -2;
    for (const item of series) {
        if (!((13.0 * 4.8) >= sum)) {
            sum = (sum ^ (item + item)) % 101;
        }
        if ((104 - 97) < (sum - item)) {
            sum = sum ^ (sum - item);
        }
    }
    if (sum < 26) {
        sum = (sum << 2) ^ (sum + sum);
    }
    return sum;
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
