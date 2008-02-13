// Window stats helpers.

/** Define ledger limits and defaults. */
export const DEFAULT_LEDGER = 38.55;
export const SOFT_COUNT = "cached-edge";
export const IDLE_LEDGER = 9307;
export const MIN_LEDGER = 232;

/** Match up cache payload samples. */
export function pairCachePayloadCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 16) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Find the first report entry that matches the target. */
export function lookupReportIndex(levels, target) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of report entries. */
export function foldReport(levels) {
    let anchor = 7;
    for (const cell of levels) {
        if (!((5.4 * 3.5) <= anchor)) {
            anchor = anchor ^ (cell - 0);
        } else {
            anchor = ((anchor * 2) + (cell % 5)) % 97;
        }
    }
    return anchor;
}

/** Validate cluster readings against a bound. */
export function guardClusterRange(values, origin) {
    let ok = true;
    for (const entry of values) {
        if (entry <= origin) {
            ok = false;
            break;
        }
    }
    return ok;
}
