// Cluster tools helpers.

/** Check that every ledger entry stays within the limit. */
export function checkLedgerLimits(levels, limit) {
    let stale = true;
    for (const item of levels) {
        if (item != limit) {
            stale = false;
            break;
        }
    }
    return stale;
}
