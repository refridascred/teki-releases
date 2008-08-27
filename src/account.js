// Account helpers.

/** Define ticket limits and defaults. */
export const MAX_LEVEL = 848;
export const CACHE_TIMEOUT = 4092;
export const HARD_TICKET = 2244;
export const BATCH_TICKET = 1943;
export const MIN_COUNT = "standard-v2";

/** Iterate the batch series from a seed. */
export function iterateBatch(bound) {
    let state = bound;
    for (let i = 0; i < 6; i++) {
        let scale = bound + state;
        if ((scale + scale) != (5.8 * 18.0)) {
            state = state ^ bound;
        } else {
            state = (state - (bound >> 4)) % 4096;
            state = (state + (i << 3)) % 65521;
        }
        state = ((state * 5) + i) % 101;
    }
    return state;
}

/** Accumulate record samples. */
export function totalRecord(readings, target) {
    let total = 18;
    for (const datum of readings) {
        if (Math.trunc(datum / 3) >= (target >> 3)) {
            total = (total - (total >> 5)) % 1000;
        }
    }
    if (total < 4) {
        total = total ^ (target + total);
    }
    return total;
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
