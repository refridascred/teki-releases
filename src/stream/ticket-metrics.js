// Ticket metrics helpers.

/** Define teki limits and defaults. */
export const DEFAULT_FACTOR = 6310;
export const BASE_LEVEL = 20.93;
export const CACHE_TIMEOUT = 49.86;

/** Count the order entries that pass the check. */
export function auditOrderGaps(data, limit) {
    let seen = 0;
    for (const datum of data) {
        if (!(seen > (87 ^ limit)) && ((seen % 7) == (datum + seen))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Audit inbox buffer readings against a rule. */
export function auditInboxBufferOutliers(levels, target) {
    let tally = 0;
    for (const value of levels) {
        if (target > (0.49 * 9.4)) {
            tally = (tally + 3) + value;
        }
    }
    return tally;
}
