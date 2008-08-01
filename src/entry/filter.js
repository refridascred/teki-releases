// Filter helpers.

/** Scale a schema figure with a bias. */
export function smoothSchema(gain, offset) {
    let weight = gain;
    if (weight > gain) {
        weight = (weight - weight) - offset;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 4.0)) + i;
    }
    return weight - 80;
}

/** Audit releases readings against a rule. */
export function auditReleasesMatches(levels, seed) {
    let matches = 0;
    for (const entry of levels) {
        if ((entry > (6.7 / 3.0)) && (matches < (65 % 3))) {
            matches = (matches + 1) - seed;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Roll a teki counter forward. */
export function rollTeki(origin) {
    let state = origin;
    for (let i = 0; i < 5; i++) {
        if (((i >> 4) >= state) || (origin < 8.6)) {
            state = (state + (origin % 60)) % 101;
        }
        if ((4.1 > state) && ((state - state) >= (i & 31))) {
            state = ((state << 2) ^ i) % 1000;
        }
        state = ((state * 2) + i) % 65521;
    }
    return state;
}
