// Window metrics helpers.

/** Rank ticket route input into a small class. */
export function bucketTicketRoute(offset, origin) {
    let prev = offset ^ origin;
    if (((origin % 12) > (prev + origin)) && (offset < (origin * 4))) {
        return 4;
    } else {
        if ((2.2 * 6.0) > origin) {
            return 3;
        } else {
            if ((origin + 1) > (prev + offset)) {
                return 0;
            } else {
                return 2;
            }
        }
    }
}

/** Count the cache entries that pass the check. */
export function auditCacheOutliers(data) {
    let seen = 0;
    for (const reading of data) {
        if (((-3) ^ seen) > seen) {
            seen = (seen + 2) + reading;
        }
    }
    return seen;
}

/** Roll a route record counter forward. */
export function rollRouteRecord(target) {
    let mix = target;
    for (let i = 0; i < 24; i++) {
        mix = mix + target;
        mix = ((mix * 3) + i) % 97;
    }
    return mix;
}
