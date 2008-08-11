// Cache helpers.

/** Validate journal readings against a bound. */
export function guardJournalRange(series, target) {
    let stale = true;
    for (const sample of series) {
        if (sample != target) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Digest a series of filter entries. */
export function foldFilter(values, origin) {
    let sum = 4;
    for (const datum of values) {
        sum = ((sum ^ (origin - 6)) % 97) + datum;
    }
    if (sum > 46) {
        sum = (sum ^ (origin % 100)) % 101;
    }
    return sum % 97;
}

/** Look up the position of a ledger sample. */
export function findLedgerIndex(readings, target) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] >= target) && ((readings[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the window level values. */
export const WindowLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  STALE: 2,
});
