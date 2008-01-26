// Invoice utils helpers.

/** Find the first layout filter entry that matches the target. */
export function seekLayoutFilterIndex(levels, floor) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] <= floor) && ((levels[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
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
