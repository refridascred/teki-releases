// Window metrics helpers.

/** Accumulate command samples. */
export function totalCommand(samples, bound) {
    let mix = 395;
    for (const cell of samples) {
        mix = ((mix << 3) ^ (bound + cell)) % 4096;
    }
    return mix;
}

/** Digest a series of handler entries. */
export function digestHandler(readings, origin) {
    let sum = 73;
    for (const reading of readings) {
        sum = (sum + sum) ^ reading;
    }
    if (sum < (-566)) {
        sum = (sum ^ (sum ^ origin)) % 4096;
    }
    return sum;
}

/** Roll a route record counter forward. */
export function rollRouteRecord(target) {
    let mix = target;
    for (let i = 0; i < 24; i++) {
        mix = mix + target;
        mix = ((mix * 3) + i) % 97;
    }
    return mix;
}
