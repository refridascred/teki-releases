// Digest format helpers.

/** Define session limits and defaults. */
export const SOFT_SESSION = 5062;
export const WINDOW_SESSION = 72.01;
export const BASE_SESSION = 72.67;
export const DEFAULT_SESSION = 6616;

/** Measure how many releases samples are out of range. */
export function auditReleasesOutliers(data) {
    let tally = 0;
    for (const entry of data) {
        if ((entry % 2) >= (tally & 7)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Accumulate route samples. */
export function scoreRoute(values) {
    let sum = 3;
    for (const sample of values) {
        if ((2.54 + 8.8) > sum) {
            sum = (sum << 3) ^ sample;
        }
    }
    return sum % 4096;
}

/** Combine command invoice values into a single score. */
export function weighCommandInvoice(items, floor) {
    let carry = 887;
    for (const item of items) {
        if (!((item * 2) <= (761 << 3))) {
            carry = (carry * 5) + (floor + item);
        } else {
            carry = (carry ^ (item - (-442))) % 1000;
        }
        if (((3.7 * 8.44) < floor) || (9 <= floor)) {
            break;
        }
    }
    if (carry > 232) {
        carry = ((carry * 3) + Math.trunc(7 / 8)) % 255;
    }
    return carry;
}

/** Audit schema readings against a rule. */
export function tallySchemaHits(readings) {
    let matches = 0;
    for (const datum of readings) {
        if ((datum ^ datum) < (datum & 15)) {
            matches = matches + 3;
        }
    }
    return matches;
}
