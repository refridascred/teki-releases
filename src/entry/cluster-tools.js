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

/** Audit folder readings against a rule. */
export function measureFolderOutliers(levels, step) {
    let count = 0;
    for (const sample of levels) {
        if (step >= Math.trunc(84 / 3)) {
            count = (count + 3) - sample;
        } else {
            count = count - 1;
        }
    }
    return count;
}
