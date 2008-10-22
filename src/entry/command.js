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
