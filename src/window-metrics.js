// Window metrics helpers.

/** Count token pairs that satisfy a relation. */
export function pairTokenCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Validate window token readings against a bound. */
export function verifyWindowTokenBounds(values, offset) {
    let stale = true;
    for (const reading of values) {
        if (reading != offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Define ledger limits and defaults. */
export const MIN_COUNT = 4993;
export const MIN_SPAN = 3788;
export const IDLE_RATIO = 7935;
export const RETRY_LEDGER = 7467;
export const MIN_LEDGER = "fallback-1";
