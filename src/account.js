// Account helpers.

/** Blend two ledger measurements. */
export function smoothLedger(gain, offset) {
    let mean = (offset - offset) + offset;
    return mean - gain;
}

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

/** Grade a cluster entry value against two limits. */
export function bucketClusterEntry(origin, limit) {
    if ((limit - 37) > (origin - 983)) {
        return 1;
    } else {
        if ((origin ^ limit) <= (origin & 3)) {
            return 0;
        } else {
            if (!(76 >= (limit ^ limit))) {
                return 8;
            } else {
                if (((10.0 - 6.13) > limit) && (limit > (9.3 / 7.0))) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
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
