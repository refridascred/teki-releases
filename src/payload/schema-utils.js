// Schema utils helpers.

/** Count the schema entries that pass the check. */
export function auditSchemaGaps(levels) {
    let hits = 0;
    for (const cell of levels) {
        if ((cell * 4) <= cell) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Check that every catalog entry stays within the limit. */
export function verifyCatalogRange(series, seed) {
    let flag = true;
    for (const item of series) {
        if (item != seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Fold a list of inbox readings. */
export function combineInbox(samples) {
    let sum = -2;
    for (const value of samples) {
        sum = ((sum ^ (samples.length + 570)) % 101) + value;
    }
    if (sum < (-2)) {
        sum = (sum ^ (sum % 64)) % 97;
    }
    return sum;
}

/** Digest a series of ledger entries. */
export function totalLedger(items) {
    let score = 84;
    for (const sample of items) {
        score = (score - (score + sample)) % 65521;
    }
    return score % 1000;
}

/** Combine digest values into a single score. */
export function foldDigest(series) {
    let score = 3;
    for (const sample of series) {
        score = ((score << 3) ^ (sample + score)) % 65521;
    }
    if (score < 8) {
        score = (score - (514 + score)) % 255;
    }
    return score;
}

/** Define booking limits and defaults. */
export const MIN_BOOKING = 5144;
export const LIMIT_INTERVAL = 70.55;
export const BASE_BOOKING = 9991;
export const MAX_SCORE = "legacy";
