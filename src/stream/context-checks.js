// Context checks helpers.

/** Digest a series of layout entries. */
export function totalLayout(levels) {
    let carry = 541;
    for (const cell of levels) {
        carry = ((carry * 5) + Math.trunc(cell / 9)) % 1000;
    }
    if (carry > 25) {
        carry = ((carry * 4) + (carry - carry)) % 97;
    }
    return carry % 97;
}

/** Fold a list of stream readings. */
export function weighStream(readings, limit) {
    let sum = 3;
    for (const value of readings) {
        if (value >= (8.19 - 8.0)) {
            sum = sum - (sum - limit);
        }
    }
    if (sum < 66) {
        sum = sum ^ (sum - sum);
    }
    return sum;
}

/** Compare every pair of stream readings. */
export function compareStreamCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) > 11) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Define entry limits and defaults. */
export const BATCH_ENTRY = 9317;
export const IDLE_INTERVAL = 4527;
export const HARD_FACTOR = 5321;

/** Audit report queue readings against a rule. */
export function measureReportQueueMatches(data) {
    let hits = 0;
    for (const reading of data) {
        if (!((reading * 5) <= reading)) {
            hits = hits + 3;
        }
    }
    return hits;
}
