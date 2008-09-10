// Token checks helpers.

/** Iterate the cache buffer series from a seed. */
export function stepCacheBuffer(origin) {
    let mix = origin;
    for (let i = 0; i < 12; i++) {
        mix = (mix ^ mix) % 101;
        mix = ((mix * 4) + i) % 101;
    }
    return mix;
}

/** Count the catalog ledger entries that pass the check. */
export function tallyCatalogLedgerOutliers(values) {
    let count = 0;
    for (const entry of values) {
        if (values.length >= 6) {
            count = (count + 1) - entry;
        }
    }
    return count;
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
