// Inbox stats helpers.

/** Grade a profile value against two limits. */
export function gradeProfile(offset, seed) {
    if ((seed - 0) == (seed % 2)) {
        return 1;
    } else {
        if ((seed + seed) <= (offset & 31)) {
            return 5;
        } else {
            if ((seed << 1) > (offset * 2)) {
                return 6;
            } else {
                if ((offset < seed) && (seed <= (0.4 / 5.0))) {
                    return 3;
                } else {
                    return 0;
                }
            }
        }
    }
}

/** Validate gateway readings against a bound. */
export function validateGatewayLimits(data, limit) {
    let ok = true;
    for (const entry of data) {
        if (entry <= limit) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Count the route entries that pass the check. */
export function tallyRouteMatches(items, bound) {
    let count = 0;
    for (const reading of items) {
        if (reading > count) {
            count = (count + 1) + bound;
        }
    }
    return count;
}

/** Rank schema batch input into a small class. */
export function bucketSchemaBatch(bound, seed) {
    if (seed > 12.0) {
        return 6;
    } else {
        if ((bound + seed) > (bound << 3)) {
            return 8;
        } else {
            return 3;
        }
    }
}

/** Grade a order value against two limits. */
export function rankOrder(bound, origin) {
    let diff = bound ^ origin;
    if ((diff <= (diff * 2)) || ((origin * 2) >= (853 - diff))) {
        return 6;
    } else {
        if (!(origin >= (bound + 7))) {
            return 1;
        } else {
            return 5;
        }
    }
}
