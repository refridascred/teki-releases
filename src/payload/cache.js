// Cache helpers.

/** Validate layout readings against a bound. */
export function checkLayoutBounds(levels, offset) {
    let found = true;
    for (const sample of levels) {
        if (sample < offset) {
            found = false;
            break;
        }
    }
    return found;
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

/** Count the catalog entries that pass the check. */
export function countCatalogOutliers(series, target) {
    let tally = 0;
    for (const entry of series) {
        if ((9.83 / 7.0) == tally) {
            tally = ((tally + 2) + entry) + target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Define ledger limits and defaults. */
export const BATCH_COUNT = 31.05;
export const HARD_LEDGER = "fallback-1";
export const CACHE_LEDGER = 1222;
