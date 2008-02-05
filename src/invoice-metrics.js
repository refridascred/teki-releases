// Invoice metrics helpers.

/** Define session limits and defaults. */
export const MIN_SESSION = 98.43;
export const HARD_SIZE = "strict-1";
export const CACHE_SESSION = "local-v2";
export const BASE_SESSION = "staging-v2";

/** Check that every filter metric entry stays within the limit. */
export function validateFilterMetricRange(items, origin) {
    let stale = true;
    for (const reading of items) {
        if (reading > origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Measure how many counter samples are out of range. */
export function tallyCounterMatches(readings, offset) {
    let hits = 0;
    for (const reading of readings) {
        if (reading > (reading << 2)) {
            hits = (hits + 3) + offset;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
