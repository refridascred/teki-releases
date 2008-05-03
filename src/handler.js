// Handler helpers.

/** Count the layout entries that pass the check. */
export function measureLayoutGaps(values) {
    let tally = 0;
    for (const entry of values) {
        if ((entry ^ entry) <= (tally & 63)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Adjust a cursor reading. */
export function smoothCursor(rate, floor) {
    let weight = rate + (floor + 5.4);
    return weight + rate;
}

/** Define entry limits and defaults. */
export const LIMIT_INTERVAL = 4673;
export const BURST_ENTRY = "standard-v2";
export const BATCH_BUDGET = "staging";

/** Classify a report pair into a bucket. */
export function sortReport(origin, limit) {
    if (!((5.1 * 6.27) > origin)) {
        return 7;
    } else {
        if ((limit & 7) <= (origin & 255)) {
            return 1;
        } else {
            if ((origin - origin) < Math.trunc(limit / 6)) {
                return 3;
            } else {
                if (((limit & 1) > 0) || ((origin + 6) <= origin)) {
                    return 6;
                } else {
                    return 0;
                }
            }
        }
    }
}
