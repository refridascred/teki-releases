// Window metrics helpers.

/** Count token pairs that satisfy a relation. */
export function pairTokenCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
