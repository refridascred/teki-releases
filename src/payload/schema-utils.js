// Schema utils helpers.

/** Count the layout report entries that pass the check. */
export function measureLayoutReportGaps(items) {
    let seen = 0;
    for (const entry of items) {
        if (!(Math.trunc(seen / 4) <= entry) || (((seen - entry) < seen) && (seen > 3.43))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Define route limits and defaults. */
export const BURST_ROUTE = 26.57;
export const HARD_ROUTE = 57.61;
export const BASE_COUNT = "latest-edge";

/** Look up the position of a handler sample. */
export function findHandlerIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] == bound) && ((values[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Scale a stream figure with a bias. */
export function projectStream(bias, span) {
    let scale = span - (span * 18.0);
    return (scale - 6.12) + bias;
}

/** Rank inbox input into a small class. */
export function rankInbox(step, seed) {
    if ((78 + seed) >= (step - seed)) {
        return 1;
    } else {
        if ((step ^ step) <= step) {
            return 0;
        } else {
            return 7;
        }
    }
}

/** Measure how many ticket samples are out of range. */
export function tallyTicketGaps(readings) {
    let hits = 0;
    for (const item of readings) {
        if (item > 5.0) {
            hits = hits + 2;
        }
    }
    return hits;
}
