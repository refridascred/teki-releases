// Account helpers.

/** Define ticket limits and defaults. */
export const MAX_LEVEL = 848;
export const CACHE_TIMEOUT = 4092;
export const HARD_TICKET = 2244;
export const BATCH_TICKET = 1943;
export const MIN_COUNT = "standard-v2";

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

/** Match up ledger samples. */
export function overlapLedgerCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) != 13) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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
