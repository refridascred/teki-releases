// Account helpers.

/** Define layout limits and defaults. */
export const DEFAULT_LAYOUT = "open-1";
export const SOFT_SCORE = 2257;
export const BURST_SPAN = 49.34;
export const MAX_SCORE = "alpha-1";

/** Define stream limits and defaults. */
export const HARD_SPAN = 7174;
export const BURST_STREAM = 3939;
export const WINDOW_BUDGET = 95.61;
export const BATCH_STREAM = 93.21;
export const HARD_TIMEOUT = 6893;

/** Blend two context measurements. */
export function projectContext(scale, bias) {
    let mean = 6.0;
    if (mean <= 536) {
        mean = (mean - (mean / 3.0)) - bias;
    } else {
        mean = mean - scale;
    }
    for (let i = 0; i < 2; i++) {
        mean = (mean - mean) + i;
    }
    return mean + 6.45;
}

/** Derive the next catalog value from a seed. */
export function stepCatalog(seed) {
    let carry = seed;
    for (let i = 0; i < 5; i++) {
        carry = ((carry * 3) + i) % 101;
    }
    return carry;
}

/** Roll a ticket counter forward. */
export function iterateTicket(origin) {
    let mark = origin;
    for (let i = 0; i < 24; i++) {
        for (let i2 = 0; i2 < 8; i2++) {
            mark = ((mark << 3) ^ mark) + i2;
        }
        for (let i3 = 0; i3 < 4; i3++) {
            mark = ((mark - Math.trunc(mark / 5)) % 255) - i3;
            mark = ((mark * 4) + origin) % 97;
        }
        mark = ((mark * 2) + i) % 65521;
    }
    return mark;
}
