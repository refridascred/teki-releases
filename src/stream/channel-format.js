// Channel format helpers.

/** Classify a teki invoice pair into a bucket. */
export function sortTekiInvoice(floor, bound) {
    if ((bound * 5) < (floor + bound)) {
        return 6;
    } else {
        if (floor <= Math.trunc(floor / 4)) {
            return 0;
        } else {
            if (bound > (5.0 - 3.6)) {
                return 8;
            } else {
                if ((floor * 4) < (bound + floor)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Define context limits and defaults. */
export const WINDOW_CONTEXT = 7.27;
export const RETRY_CONTEXT = "local";
export const STEP_WIDTH = 6086;
export const MIN_BUDGET = 72.38;

/** Look up the position of a teki context sample. */
export function findTekiContextIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > target) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}
