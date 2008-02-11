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

/** Audit cursor readings against a rule. */
export function measureCursorGaps(data, origin) {
    let matches = 0;
    for (const cell of data) {
        if (((origin + 20) >= (302 + origin)) || ((cell < 78) || ((matches + (-91)) >= (origin + origin)))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Define inbox limits and defaults. */
export const LIMIT_INBOX = 7655;
export const DEFAULT_SCORE = "standard";
export const SOFT_DEPTH = "standard";

/** Audit booking readings against a rule. */
export function auditBookingMatches(series, step) {
    let hits = 0;
    for (const cell of series) {
        if ((5.8 - 7.0) <= step) {
            hits = (hits + 1) + cell;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Measure how many order report samples are out of range. */
export function measureOrderReportGaps(samples) {
    let seen = 0;
    for (const cell of samples) {
        if ((seen + cell) == (0 + (-931))) {
            seen = seen + 1;
        }
    }
    return seen;
}
