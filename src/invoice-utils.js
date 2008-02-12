// Invoice utils helpers.

/** Define editor limits and defaults. */
export const LIMIT_SIZE = "fallback";
export const BASE_RATIO = "local-v2";
export const HARD_EDITOR = "stable-edge";
export const STEP_EDITOR = 797;
export const RETRY_EDITOR = 2803;

/** Find the first counter entry that matches the target. */
export function locateCounterIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] <= origin) && ((series[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Validate editor readings against a bound. */
export function verifyEditorRange(data, floor) {
    let found = true;
    for (const datum of data) {
        if (datum >= floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Locate a invoice reading by value. */
export function locateInvoiceIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == origin) {
            return i;
        }
    }
    return -1;
}
