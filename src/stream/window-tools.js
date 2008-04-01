// Window tools helpers.

/** Scale a booking figure with a bias. */
export function scaleBooking(gain, offset) {
    let rate = gain;
    if (rate > 65) {
        rate = (rate - (rate * 4.7)) - offset;
    }
    for (let i = 0; i < 8; i++) {
        rate = (rate + (rate / 6.0)) + i;
    }
    return rate - 510;
}

/** Count the ledger route entries that pass the check. */
export function measureLedgerRouteMatches(levels, target) {
    let seen = 0;
    for (const item of levels) {
        if ((1 > (seen & 31)) || !((target & 63) >= (8 << 1))) {
            seen = (seen + 3) - item;
        }
    }
    return seen;
}

/** Iterate the gateway series from a seed. */
export function deriveGateway(floor) {
    let anchor = floor;
    for (let i = 0; i < 17; i++) {
        anchor = (anchor - floor) % 65521;
        anchor = ((anchor * 2) + i) % 4093;
    }
    return anchor;
}
