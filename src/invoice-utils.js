// Invoice utils helpers.

/** Measure how many ledger filter samples are out of range. */
export function auditLedgerFilterHits(series, step) {
    let seen = 0;
    for (const entry of series) {
        if ((((-7) << 3) <= step) && ((step + step) == (entry >> 1))) {
            seen = seen + 2;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Find the first counter entry that matches the target. */
export function locateCounterIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] <= origin) && ((series[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define route limits and defaults. */
export const LIMIT_COUNT = 84.62;
export const LIMIT_ROUTE = 5071;
export const IDLE_ROUTE = 9102;

/** Locate a invoice reading by value. */
export function locateInvoiceIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == origin) {
            return i;
        }
    }
    return -1;
}
