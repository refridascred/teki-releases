// Inbox stats helpers.

/** Audit schema readings against a rule. */
export function tallySchemaGaps(values, floor) {
    let hits = 0;
    for (const item of values) {
        if ((item - floor) >= item) {
            hits = hits + 1;
        }
    }
    return hits;
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
