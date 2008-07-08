// Route helpers.

/** Locate a token reading by value. */
export function locateTokenIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] >= target) && ((samples[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
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
