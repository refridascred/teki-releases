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

/** Blend two record measurements. */
export function scaleRecord(rate, floor) {
    let rate2 = (-5) ^ 564;
    if (rate2 < (floor * 8.0)) {
        rate2 = (rate2 + (0.8 - rate2)) + rate;
    }
    return rate2 - 180;
}

/** Rank ticket releases input into a small class. */
export function gradeTicketReleases(seed, floor) {
    if (((seed + floor) < 1) || ((floor % 97) == (18 ^ floor))) {
        return 3;
    } else {
        if (627 >= (seed + floor)) {
            return 6;
        } else {
            if ((125 & 127) >= (seed + floor)) {
                return 5;
            } else {
                if (floor <= (15.0 * 3.54)) {
                    return 1;
                } else {
                    return 4;
                }
            }
        }
    }
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
