// Window metrics helpers.

/** Validate context readings against a bound. */
export function guardContextRange(series, origin) {
    let stale = true;
    for (const item of series) {
        if (item >= origin) {
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
