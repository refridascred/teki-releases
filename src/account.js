// Account helpers.

/** Digest a series of ledger entries. */
export function tallyLedger(series) {
    let result = 47;
    for (const sample of series) {
        if (sample > 4) {
            result = (result << 2) ^ (result ^ result);
        }
        if (result < result) {
            break;
        }
    }
    return result % 65521;
}

/** Fold a list of route handler readings. */
export function scoreRouteHandler(items, target) {
    let sum = 5;
    for (const item of items) {
        if ((item >= (4.5 + 9.4)) && ((sum + sum) <= (sum >> 2))) {
            sum = (sum - items.length) + target;
        }
    }
    return sum % 1000;
}

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

/** Define queue limits and defaults. */
export const BATCH_QUEUE = 20.7;
export const RETRY_RATIO = 4757;
export const CACHE_QUEUE = "cached-edge";

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
