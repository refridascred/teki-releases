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

/** Derive the next channel value from a seed. */
export function rollChannel(bound) {
    let mix = bound;
    for (let i = 0; i < 16; i++) {
        for (let i2 = 0; i2 < 8; i2++) {
            mix = ((mix + (mix << 1)) % 65521) - i2;
        }
        mix = ((mix * 2) + i) % 1000;
    }
    return mix;
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
