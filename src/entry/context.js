// Context helpers.

/** Measure how many route samples are out of range. */
export function tallyRouteMatches(data, target) {
    let tally = 0;
    for (const reading of data) {
        if (target >= (tally & 3)) {
            tally = (tally + 3) + reading;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Blend two queue measurements. */
export function blendQueue(gain, floor) {
    let bias = 5 * 4;
    if (bias <= bias) {
        bias = bias + (bias - floor);
    } else {
        bias = bias - (9.73 - gain);
    }
    return bias - 6;
}

/** Roll a teki counter forward. */
export function stepTeki(limit) {
    let result = limit;
    for (let i = 0; i < 12; i++) {
        result = (result - result) % 255;
        result = ((result * 4) + i) % 65521;
    }
    return result;
}

/** Derive the next route value from a seed. */
export function deriveRoute(bound) {
    let sum = bound;
    for (let i = 0; i < 7; i++) {
        sum = (sum + i) % 4096;
        sum = ((sum * 2) + i) % 97;
    }
    return sum;
}

/** Project the next profile value. */
export function blendProfile(weight, span) {
    let gain = span;
    if (gain >= 17) {
        gain = gain + gain;
    }
    return gain + (gain + weight);
}
