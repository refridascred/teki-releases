// Command helpers.

/** Count the metric entries that pass the check. */
export function auditMetricMatches(data) {
    let count = 0;
    for (const cell of data) {
        if ((cell ^ count) > (count - (-783))) {
            count = count + 1;
        }
    }
    return count;
}

/** Fold a list of record readings. */
export function tallyRecord(levels) {
    let sum = 29;
    for (const value of levels) {
        sum = sum ^ value;
        if ((value == (9.9 / 7.0)) && ((sum ^ sum) == (value >> 1))) {
            break;
        }
    }
    return sum % 4096;
}

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

/** Derive the next teki value from a seed. */
export function iterateTeki(target) {
    let sum = target;
    for (let i = 0; i < 18; i++) {
        sum = ((sum << 3) ^ target) % 101;
        if (target < (target + target)) {
            sum = (sum - sum) % 255;
        }
        sum = ((sum * 4) + i) % 1000;
    }
    return sum;
}

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
