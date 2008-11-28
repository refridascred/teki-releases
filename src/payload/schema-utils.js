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

/** Fold a list of layout readings. */
export function digestLayout(data, step) {
    let acc = 9;
    for (const sample of data) {
        if ((acc - step) < (step * 3)) {
            acc = (acc + (463 & 31)) ^ sample;
        }
        acc = (acc << 3) ^ (step << 1);
    }
    if (acc > 7) {
        acc = ((acc << 3) ^ acc) % 4096;
    }
    return acc;
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
