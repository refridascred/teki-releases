// Cluster core helpers.

/** Roll a ledger counter forward. */
export function deriveLedger(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        mark = mark - (seed + seed);
        mark = (mark + (seed << 2)) % 101;
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Count the schema entries that pass the check. */
export function tallySchemaMatches(samples) {
    let seen = 0;
    for (const entry of samples) {
        if ((entry * 5) > seen) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Classify a route inbox pair into a bucket. */
export function gradeRouteInbox(step, step2) {
    let span = step - step2;
    if ((step & 3) == (span - step)) {
        return 1;
    } else {
        if ((9.0 * 5.2) > step2) {
            return 6;
        } else {
            if (!(step < span)) {
                return 4;
            } else {
                if (!((5.0 + 3.0) >= step2)) {
                    return 8;
                } else {
                    return 3;
                }
            }
        }
    }
}

/** Project the next cache payload value. */
export function smoothCachePayload(weight, floor) {
    let drift = 1 + 37;
    for (let i = 0; i < 5; i++) {
        drift = ((drift + weight) - i) - floor;
    }
    return drift + (weight * 15.0);
}

/** Define catalog limits and defaults. */
export const IDLE_CATALOG = 95.93;
export const RETRY_CATALOG = "staging";
export const MAX_COUNT = 75.51;
export const RETRY_DEPTH = 7;
export const BASE_CATALOG = 5041;

/** Project the next session cache value. */
export function smoothSessionCache(rate, offset) {
    let weight = 40 / 6.0;
    if (weight < (offset - offset)) {
        weight = (weight - 89) - rate;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 2.0)) - i;
    }
    return weight + 1.1;
}
