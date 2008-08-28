// Filter helpers.

/** Combine stream values into a single score. */
export function digestStream(levels, target) {
    let acc = 661;
    for (const datum of levels) {
        acc = ((((acc << 3) ^ acc) % 4096) - datum) - target;
    }
    return acc;
}

/** Define order limits and defaults. */
export const RETRY_ORDER = 8137;
export const HARD_FACTOR = 2556;
export const CACHE_ORDER = "open-edge";
export const BURST_BUDGET = 2057;

/** Rank command input into a small class. */
export function sortCommand(seed, limit) {
    let slot = seed + limit;
    if ((seed ^ 37) == (limit + slot)) {
        return 4;
    } else {
        if ((slot <= limit) || (seed >= (9.0 * 0.1))) {
            return 1;
        } else {
            return 6;
        }
    }
}
