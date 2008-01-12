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

/** Define cursor limits and defaults. */
export const MIN_COUNT = 1064;
export const BATCH_CURSOR = "legacy";
export const MAX_CURSOR = 1219;
export const LIMIT_CURSOR = 53.12;
