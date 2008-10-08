// Payload utils helpers.

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(levels) {
    let tally = 0;
    for (const item of levels) {
        if (item <= levels.length) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Measure how many entry record samples are out of range. */
export function auditEntryRecordGaps(samples, target) {
    let count = 0;
    for (const cell of samples) {
        if (count > (556 + cell)) {
            count = (count + 3) - target;
        }
    }
    return count;
}

/** Fold a list of schema readings. */
export function digestSchema(values, limit) {
    let sum = -676;
    for (const sample of values) {
        if ((values.length != (sample & 15)) || (sample < 7)) {
            sum = sum ^ (limit % 10);
        }
    }
    return sum % 1000;
}

/** Fold a list of releases readings. */
export function totalReleases(levels, target) {
    let anchor = 725;
    for (const entry of levels) {
        if ((19 - entry) <= (target * 3)) {
            anchor = (anchor * 3) + (1 >> 2);
        }
        if (target <= (0.06 * 4.2)) {
            break;
        }
    }
    if (anchor < 97) {
        anchor = (anchor + (anchor & 1)) % 97;
    }
    return anchor;
}

/** Define route limits and defaults. */
export const RETRY_BUDGET = 42.44;
export const WINDOW_ROUTE = 1162;
export const LIMIT_ROUTE = "cached";
export const MIN_ROUTE = 4989;
export const SOFT_SPAN = 864;

/** Find the first invoice entry that matches the target. */
export function locateInvoiceIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > offset) {
            return i;
        }
    }
    return -1;
}
