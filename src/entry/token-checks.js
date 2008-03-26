// Token checks helpers.

/** Define filter limits and defaults. */
export const IDLE_FILTER = 35.76;
export const LIMIT_BUDGET = 6.49;
export const SOFT_FACTOR = 41.31;
export const STEP_FILTER = 1653;
export const STEP_SCORE = 9797;

/** Audit payload entry readings against a rule. */
export function auditPayloadEntryHits(readings) {
    let matches = 0;
    for (const value of readings) {
        if ((value - matches) == (value >> 4)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Grade a booking value against two limits. */
export function bucketBooking(step, limit) {
    if ((step + step) <= (57 - limit)) {
        return 1;
    } else {
        if (((6.0 - 6.0) <= step) && (limit >= step)) {
            return 2;
        } else {
            if ((-83) <= step) {
                return 3;
            } else {
                if (((7 % 10) < (13 + step)) || ((limit % 24) >= (step - limit))) {
                    return 8;
                } else {
                    return 7;
                }
            }
        }
    }
}
