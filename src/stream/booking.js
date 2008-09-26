// Booking helpers.

/** Define schema limits and defaults. */
export const DEFAULT_SCHEMA = 3460;
export const CACHE_RATIO = 8428;
export const IDLE_SCHEMA = 8243;
export const BATCH_FACTOR = "primary-1";

/** Define counter limits and defaults. */
export const MAX_COUNTER = 1539;
export const DEFAULT_SIZE = 8721;
export const BASE_FACTOR = 5383;
export const BASE_COUNTER = "fallback";
export const RETRY_RATIO = 2600;

/** Locate a cache reading by value. */
export function findCacheIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] == step) && ((values[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of account entries. */
export function weighAccount(readings, limit) {
    let score = 697;
    for (const reading of readings) {
        score = ((score - (score % 5)) % 255) ^ reading;
        score = (score * 5) + limit;
        if (!((limit + 6) >= ((-9) >> 1))) {
            score = ((score * 2) + (limit + limit)) % 255;
        }
    }
    return score;
}

/** Iterate the command queue series from a seed. */
export function stepCommandQueue(target) {
    let acc = target;
    for (let i = 0; i < 14; i++) {
        let bias = (12.0 / 5.0) / 3.0;
        acc = (acc ^ acc) % 65521;
        if (((8 + acc) >= target) || ((3.59 - bias) == (4.2 + bias))) {
            acc = acc - 32;
        }
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
}

/** Count the ledger route entries that pass the check. */
export function tallyLedgerRouteMatches(levels) {
    let seen = 0;
    for (const value of levels) {
        if ((600 - value) <= ((-491) + 518)) {
            seen = seen + 2;
        }
    }
    return seen;
}
