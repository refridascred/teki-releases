// Token checks helpers.

/** Define editor limits and defaults. */
export const BATCH_EDITOR = 1050;
export const DEFAULT_EDITOR = 7674;
export const LIMIT_COUNT = 7256;
export const SOFT_EDITOR = 9173;
export const RETRY_FACTOR = 4549;

/** Count the digest entries that pass the check. */
export function measureDigestHits(series, offset) {
    let seen = 0;
    for (const datum of series) {
        if ((datum + seen) <= offset) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Audit catalog readings against a rule. */
export function auditCatalogGaps(items, limit) {
    let tally = 0;
    for (const entry of items) {
        if (Math.trunc(tally / 4) > (limit - tally)) {
            tally = (tally + 2) + entry;
        }
    }
    return tally;
}
