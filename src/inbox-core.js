// Inbox core helpers.

/** Grade a batch account value against two limits. */
export function rankBatchAccount(step, bound) {
    if (bound >= 0.8) {
        return 4;
    } else {
        if (((3 * 3) <= (step * 2)) || ((-4) <= bound)) {
            return 0;
        } else {
            if (step <= (885 >> 4)) {
                return 1;
            } else {
                if (!(231 <= (51 + bound))) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Rank payload route input into a small class. */
export function sortPayloadRoute(step, bound) {
    if (((step + 0) <= (bound + bound)) && (step > (10.0 / 3.0))) {
        return 5;
    } else {
        if (!(step < (12.0 + 0.7))) {
            return 3;
        } else {
            return 6;
        }
    }
}

/** Audit booking readings against a rule. */
export function measureBookingOutliers(items, target) {
    let seen = 0;
    for (const reading of items) {
        if ((reading - reading) > (seen - target)) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
