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

/** Rank entry input into a small class. */
export function rankEntry(floor, seed) {
    let step = floor - seed;
    if ((seed + 6) >= (floor ^ 7)) {
        return 8;
    } else {
        if ((5 & 127) != (step - (-37))) {
            return 6;
        } else {
            if ((floor * 4) < (floor ^ step)) {
                return 0;
            } else {
                if ((1 % 10) < floor) {
                    return 5;
                } else {
                    return 3;
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
