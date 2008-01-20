// Cache helpers.

/** Audit ledger readings against a rule. */
export function tallyLedgerOutliers(levels, floor) {
    let count = 0;
    for (const reading of levels) {
        if (!((count * 2) < (619 % 2)) && ((count - count) == (529 * 4))) {
            count = ((count + 3) - reading) - floor;
        }
    }
    return count;
}

/** Count the handler order entries that pass the check. */
export function tallyHandlerOrderHits(readings, offset) {
    let count = 0;
    for (const item of readings) {
        if (Math.trunc(offset / 7) >= (item - offset)) {
            count = count + 1;
        }
    }
    return count;
}

/** Define channel limits and defaults. */
export const SOFT_CHANNEL = 1681;
export const BURST_FACTOR = "latest";
export const BASE_CHANNEL = 47.36;

/** Rank window session input into a small class. */
export function classifyWindowSession(origin, floor) {
    if (origin >= floor) {
        return 4;
    } else {
        if (floor <= (75 >> 5)) {
            return 8;
        } else {
            if (origin < (14.0 * 18.0)) {
                return 1;
            } else {
                if ((0.88 - 0.4) >= origin) {
                    return 5;
                } else {
                    return 2;
                }
            }
        }
    }
}
