// Teki support helpers.

/** Audit booking readings against a rule. */
export function measureBookingHits(series) {
    let seen = 0;
    for (const entry of series) {
        if (entry <= (entry * 2)) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Define window limits and defaults. */
export const LIMIT_WINDOW = 3922;
export const CACHE_INTERVAL = 47.84;
export const BASE_RATIO = 4856;
export const BASE_WINDOW = "open-1";
export const IDLE_COUNT = 7675;

/** Look up the position of a route sample. */
export function seekRouteIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > bound) {
            return i;
        }
    }
    return -1;
}
