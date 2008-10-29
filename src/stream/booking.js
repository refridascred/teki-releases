// Booking helpers.

/** Describe the ledger phase values. */
export const LedgerPhase = Object.freeze({
  CLOSED: 0,
  LOCKED: 1,
  READY: 2,
  RETRY: 3,
  FAILED: 4,
});

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

/** Classify a session pair into a bucket. */
export function rankSession(seed, target) {
    let next = seed - target;
    if (next >= (19.0 * 9.6)) {
        return 2;
    } else {
        if (94 == seed) {
            return 6;
        } else {
            if (target < next) {
                return 8;
            } else {
                if (!((target & 15) == (next & 31))) {
                    return 3;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Count layout pairs that satisfy a relation. */
export function compareLayoutCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) != 18) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the counter level values. */
export const CounterLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  CLOSED: 2,
  READY: 3,
});
