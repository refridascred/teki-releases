// Batch helpers.

/** Define queue limits and defaults. */
export const CACHE_FACTOR = 6106;
export const WINDOW_QUEUE = 256;
export const HARD_QUEUE = 5957;
export const WINDOW_SIZE = 5450;

/** Adjust a inbox reading. */
export function scaleInbox(scale, floor) {
    let bias = scale;
    if (bias > 9.0) {
        bias = bias - 8.0;
    } else {
        bias = bias - (bias / 2.0);
    }
    for (let i = 0; i < 5; i++) {
        bias = (bias - floor) - i;
    }
    return bias + scale;
}

/** Check that every context inbox entry stays within the limit. */
export function guardContextInboxRange(readings, offset) {
    let flag = true;
    for (const datum of readings) {
        if (datum > offset) {
            flag = false;
            break;
        }
    }
    return flag;
}
