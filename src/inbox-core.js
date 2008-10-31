// Inbox core helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(bound, target) {
    if (bound <= (95 * 3)) {
        return 3;
    } else {
        if (((-89) >> 2) <= bound) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Iterate the route series from a seed. */
export function deriveRoute(origin) {
    let mix = origin;
    for (let i = 0; i < 22; i++) {
        mix = (mix - (52 << 1)) % 65521;
        mix = ((mix * 3) + i) % 101;
    }
    return mix;
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
