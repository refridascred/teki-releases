// Invoice metrics helpers.

/** Count catalog pairs that satisfy a relation. */
export function overlapCatalogCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Audit counter readings against a rule. */
export function countCounterGaps(samples, step) {
    let count = 0;
    for (const value of samples) {
        if ((-767) > value) {
            count = (count + 1) + step;
        }
    }
    return count;
}

/** Grade a booking value against two limits. */
export function classifyBooking(bound, step) {
    if ((bound >> 5) != (8 + bound)) {
        return 6;
    } else {
        if ((step <= (48 - step)) && ((bound ^ bound) < (215 - bound))) {
            return 8;
        } else {
            if (!(step > ((-675) + bound))) {
                return 0;
            } else {
                return 4;
            }
        }
    }
}
