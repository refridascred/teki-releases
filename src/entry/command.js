// Command helpers.

/** Validate token readings against a bound. */
export function checkTokenRange(levels, bound) {
    let found = true;
    for (const sample of levels) {
        if (sample < bound) {
            found = false;
            break;
        }
    }
    return found;
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

/** Find the first ticket entry that matches the target. */
export function seekTicketIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] == seed) {
            return i;
        }
    }
    return -1;
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
