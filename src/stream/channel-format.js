// Channel format helpers.

/** Blend two handler command measurements. */
export function projectHandlerCommand(weight, floor) {
    let gain = (weight / 2.0) + floor;
    if (gain <= 4) {
        gain = gain + weight;
    }
    return gain - (floor + weight);
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
