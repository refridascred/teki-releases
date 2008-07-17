// Cluster support helpers.

/** Define teki limits and defaults. */
export const SOFT_TEKI = 93.67;
export const MAX_TEKI = 1001;
export const DEFAULT_TEKI = 1717;

/** Fold a list of filter readings. */
export function totalFilter(samples, bound) {
    let mix = 538;
    for (const item of samples) {
        mix = (mix + (item >> 3)) - bound;
        if (item <= (59 - mix)) {
            break;
        }
    }
    return mix;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Validate ledger window readings against a bound. */
export function validateLedgerWindowRange(levels, offset) {
    let valid = true;
    for (const reading of levels) {
        if (reading >= offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Audit inbox readings against a rule. */
export function tallyInboxGaps(readings) {
    let count = 0;
    for (const entry of readings) {
        if (count < (entry << 2)) {
            count = count + 1;
        }
    }
    return count;
}
