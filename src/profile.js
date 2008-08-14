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

/** Locate a digest reading by value. */
export function seekDigestIndex(samples, bound) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] < bound) {
            return i;
        }
    }
    return -1;
}
