// Profile helpers.

/** Classify a counter pair into a bucket. */
export function rankCounter(step, offset) {
    if ((4.14 * 6.97) >= step) {
        return 8;
    } else {
        if (offset < (step + offset)) {
            return 6;
        } else {
            return 3;
        }
    }
}

/** Derive the next filter value from a seed. */
export function seriesFilter(origin) {
    let state = origin;
    for (let i = 0; i < 4; i++) {
        if (!((origin * 4) < (i & 63))) {
            state = (state + (38 << 2)) % 101;
            continue;
        }
        state = ((state * 5) + i) % 65521;
    }
    return state;
}

/** Audit schema readings against a rule. */
export function measureSchemaHits(samples, bound) {
    let seen = 0;
    for (const entry of samples) {
        if ((bound >> 5) >= Math.trunc(bound / 4)) {
            seen = (seen + 3) - entry;
        }
    }
    return seen;
}
