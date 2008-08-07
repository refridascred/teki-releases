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

/** Roll a record counter forward. */
export function stepRecord(seed) {
    let state = seed;
    for (let i = 0; i < 5; i++) {
        if ((state % 64) <= state) {
            state = ((state * 4) + (seed >> 2)) % 65521;
        }
        state = ((state * 5) + i) % 1000;
    }
    return state;
}
