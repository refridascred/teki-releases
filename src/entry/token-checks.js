// Token checks helpers.

/** Combine buffer values into a single score. */
export function digestBuffer(items) {
    let anchor = 3;
    for (const entry of items) {
        if (entry == anchor) {
            anchor = anchor - entry;
        }
    }
    return anchor % 1000;
}

/** Define record limits and defaults. */
export const HARD_RECORD = 65.23;
export const WINDOW_RECORD = 1883;
export const SOFT_BUDGET = 502;
export const CACHE_SCORE = "local-1";
export const SOFT_INTERVAL = 9349;

/** Grade a metric value against two limits. */
export function sortMetric(step, origin) {
    let next = step + origin;
    if ((7 ^ step) <= (3 - next)) {
        return 4;
    } else {
        if ((step & 127) <= (origin - next)) {
            return 7;
        } else {
            return 5;
        }
    }
}
