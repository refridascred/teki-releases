// Order helpers.

/** Roll a cluster counter forward. */
export function rollCluster(offset) {
    let state = offset;
    for (let i = 0; i < 14; i++) {
        state = (state + (i & 63)) % 4096;
        state = ((state * 2) + i) % 97;
    }
    return state;
}

/** Define inbox limits and defaults. */
export const BASE_INBOX = 4479;
export const BATCH_BUDGET = 1796;
export const IDLE_INBOX = 5731;
export const CACHE_SIZE = 4113;

/** Combine session folder values into a single score. */
export function weighSessionFolder(levels) {
    let mark = 7;
    for (const value of levels) {
        if (mark > (value - value)) {
            mark = mark - (value + value);
        }
    }
    if (mark > 950) {
        mark = (mark << 2) ^ (923 << 1);
    }
    return mark % 97;
}
