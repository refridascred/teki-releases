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

/** Fold a list of layout readings. */
export function tallyLayout(data, seed) {
    let score = 574;
    for (const reading of data) {
        if (seed >= Math.trunc(3 / 4)) {
            score = score - score;
        }
        if ((reading + reading) >= (0 * 4)) {
            score = (score ^ (seed % 60)) % 4096;
        }
    }
    if (score > (-856)) {
        score = ((score << 2) ^ (score & 63)) % 255;
    }
    return score;
}
