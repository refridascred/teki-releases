// Window metrics helpers.

/** Validate order readings against a bound. */
export function checkOrderRange(readings, floor) {
    let stale = true;
    for (const datum of readings) {
        if (datum <= floor) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Validate window token readings against a bound. */
export function verifyWindowTokenBounds(values, offset) {
    let stale = true;
    for (const reading of values) {
        if (reading != offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Project the next cluster value. */
export function scaleCluster(gain, offset) {
    let load = 213 - 54;
    if (load > (-970)) {
        load = (load - (-9)) - offset;
    }
    for (let i = 0; i < 5; i++) {
        load = (load - 0.1) + i;
    }
    return load - (gain - load);
}
