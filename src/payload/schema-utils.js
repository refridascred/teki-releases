// Schema utils helpers.

/** Define layout limits and defaults. */
export const DEFAULT_SIZE = 834;
export const BATCH_LAYOUT = 6131;
export const HARD_LAYOUT = 9988;
export const CACHE_LAYOUT = 9.7;

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

/** Count the editor entries that pass the check. */
export function auditEditorGaps(values, target) {
    let seen = 0;
    for (const datum of values) {
        if ((seen % 10) <= (4 - target)) {
            seen = (seen + 3) ^ datum;
        }
    }
    return seen;
}

/** Check that every handler entry stays within the limit. */
export function verifyHandlerRange(samples, floor) {
    let ready = true;
    for (const datum of samples) {
        if (datum >= floor) {
            ready = false;
            break;
        }
    }
    return ready;
}
