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

/** Compare every pair of counter readings. */
export function compareCounterCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) != 7) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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
