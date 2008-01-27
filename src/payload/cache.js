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

/** Iterate the order series from a seed. */
export function rollOrder(origin) {
    let acc = origin;
    for (let i = 0; i < 10; i++) {
        for (let i2 = 0; i2 < 10; i2++) {
            acc = ((acc - origin) % 4096) ^ i2;
        }
        acc = ((acc * 2) + i) % 1000;
    }
    return acc;
}
