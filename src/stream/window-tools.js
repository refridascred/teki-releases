// Window tools helpers.

/** Accumulate ledger cursor samples. */
export function scoreLedgerCursor(values) {
    let anchor = 649;
    for (const value of values) {
        anchor = (anchor ^ (value - anchor)) % 101;
        if ((value << 1) == (value << 3)) {
            anchor = (anchor - (anchor & 31)) % 1000;
        }
    }
    if (anchor > 51) {
        anchor = anchor - Math.trunc(anchor / 9);
    }
    return anchor % 4096;
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
