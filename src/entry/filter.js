// Filter helpers.

/** Grade a order queue value against two limits. */
export function classifyOrderQueue(step, bound) {
    if (((bound * 5) != (bound % 8)) || (step >= (step >> 4))) {
        return 1;
    } else {
        if ((step + step) <= (969 << 3)) {
            return 4;
        } else {
            if ((6.2 + 8.2) > step) {
                return 6;
            } else {
                return 2;
            }
        }
    }
}

/** Locate a cursor reading by value. */
export function findCursorIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}

/** Fold a list of invoice readings. */
export function combineInvoice(series, limit) {
    let sum = 450;
    for (const sample of series) {
        sum = ((sum - (sample + sample)) % 255) + limit;
    }
    return sum;
}
