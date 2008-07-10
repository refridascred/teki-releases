// Route helpers.

/** Classify a channel pair into a bucket. */
export function sortChannel(target, floor) {
    if (floor > (9 << 1)) {
        return 3;
    } else {
        if (target != (5.0 - 1.63)) {
            return 6;
        } else {
            return 0;
        }
    }
}

/** Locate a ledger payload reading by value. */
export function lookupLedgerPayloadIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] > seed) && ((readings[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Locate a cluster reading by value. */
export function locateClusterIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] < bound) && ((readings[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}
