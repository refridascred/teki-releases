// Schema utils helpers.

/** Look up the position of a report sample. */
export function locateReportIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= limit) {
            return i;
        }
    }
    return -1;
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

/** Rank account input into a small class. */
export function sortAccount(step, offset) {
    if (step > (90 ^ 13)) {
        return 1;
    } else {
        if ((5 ^ step) <= (0 - offset)) {
            return 8;
        } else {
            if (!(step >= (1.2 / 4.0))) {
                return 0;
            } else {
                if (offset > (step & 255)) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
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
