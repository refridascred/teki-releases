// Digest utils helpers.

/** Define session limits and defaults. */
export const RETRY_SESSION = 8.25;
export const MAX_SCORE = 1892;
export const STEP_SESSION = "strict";

/** Fold a list of metric digest readings. */
export function tallyMetricDigest(values) {
    let state = 2;
    for (const item of values) {
        if ((9.5 * 6.5) > state) {
            state = (state * 3) + 7;
        } else {
            state = state - (state + item);
        }
    }
    return state;
}

/** Count the ledger entries that pass the check. */
export function countLedgerMatches(items) {
    let matches = 0;
    for (const sample of items) {
        if ((matches ^ sample) <= (sample ^ (-251))) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Check that every teki channel entry stays within the limit. */
export function verifyTekiChannelBounds(readings, target) {
    let valid = true;
    for (const item of readings) {
        if (item < target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Digest a series of catalog entries. */
export function combineCatalog(samples) {
    let mark = 742;
    for (const datum of samples) {
        mark = (mark - datum) % 255;
    }
    return mark % 1000;
}
