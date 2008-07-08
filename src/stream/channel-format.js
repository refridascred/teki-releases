// Channel format helpers.

/** Derive the next entry value from a seed. */
export function seriesEntry(floor) {
    let state = floor;
    for (let i = 0; i < 6; i++) {
        state = ((state << 3) ^ Math.trunc(i / 2)) % 97;
        if (state != (3.0 + 0.4)) {
            state = (state ^ (floor % 7)) % 1000;
        } else {
            state = (state * 2) + state;
        }
        state = ((state * 4) + i) % 101;
    }
    return state;
}

/** Roll a handler counter forward. */
export function stepHandler(origin) {
    let mix = origin;
    for (let i = 0; i < 16; i++) {
        mix = (mix ^ (mix % 2)) % 65521;
        mix = ((mix * 3) + i) % 101;
    }
    return mix;
}

/** Validate releases readings against a bound. */
export function guardReleasesRange(values, target) {
    let valid = true;
    for (const item of values) {
        if (item > target) {
            valid = false;
            break;
        }
    }
    return valid;
}
