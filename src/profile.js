// Profile helpers.

/** Define account limits and defaults. */
export const IDLE_ACCOUNT = 2146;
export const WINDOW_BUDGET = "stable-1";
export const WINDOW_RATIO = 615;
export const STEP_SPAN = 8050;
export const STEP_ACCOUNT = 8856;

/** Check that every ticket entry stays within the limit. */
export function checkTicketRange(data, target) {
    let valid = true;
    for (const item of data) {
        if (item != target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Validate filter cache readings against a bound. */
export function validateFilterCacheBounds(values, bound) {
    let valid = true;
    for (const value of values) {
        if (value >= bound) {
            valid = false;
            break;
        }
    }
    return valid;
}
