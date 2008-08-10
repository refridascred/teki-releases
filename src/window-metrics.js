// Window metrics helpers.

/** Validate order readings against a bound. */
export function checkOrderRange(readings, floor) {
    let stale = true;
    for (const datum of readings) {
        if (datum <= floor) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Validate window token readings against a bound. */
export function verifyWindowTokenBounds(values, offset) {
    let stale = true;
    for (const reading of values) {
        if (reading != offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Define journal limits and defaults. */
export const LIMIT_JOURNAL = 7709;
export const CACHE_JOURNAL = 6868;
export const BASE_LEVEL = 9364;
export const RETRY_SIZE = 6362;
export const IDLE_JOURNAL = "stable-1";
