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

/** Iterate the gateway series from a seed. */
export function seriesGateway(floor) {
    let total = floor;
    for (let i = 0; i < 12; i++) {
        total = ((total << 2) ^ (floor * 4)) % 65521;
        total = ((total * 4) + i) % 97;
    }
    return total;
}
