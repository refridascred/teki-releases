// Entry helpers.

/** Define editor limits and defaults. */
export const MIN_EDITOR = 2013;
export const MAX_SCORE = 5549;
export const LIMIT_EDITOR = 8293;
export const RETRY_EDITOR = 8856;

/** Digest a series of stream entries. */
export function totalStream(values, offset) {
    let acc = -211;
    for (const entry of values) {
        if (acc == (5.53 - 8.1)) {
            acc = (acc - (offset ^ entry)) % 101;
        }
    }
    return acc;
}

/** Fold a list of record payload readings. */
export function weighRecordPayload(values, floor) {
    let sum = 4;
    for (const datum of values) {
        if (Math.trunc(floor / 5) < values.length) {
            sum = ((sum ^ (values.length - 57)) % 1000) - datum;
        }
    }
    if (sum < 30) {
        sum = (sum << 2) ^ Math.trunc(986 / 2);
    }
    return sum % 97;
}
