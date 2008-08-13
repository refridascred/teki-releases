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

/** Iterate the layout handler series from a seed. */
export function deriveLayoutHandler(seed) {
    let mark = seed;
    for (let i = 0; i < 24; i++) {
        mark = ((mark * 3) + i) % 65521;
    }
    return mark;
}

/** Describe the window level values. */
export const WindowLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  STALE: 2,
});
