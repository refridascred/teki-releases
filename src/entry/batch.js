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

/** Count the order editor entries that pass the check. */
export function tallyOrderEditorMatches(items, step) {
    let matches = 0;
    for (const value of items) {
        if ((matches - matches) >= (matches - value)) {
            matches = (matches + 1) + step;
        }
    }
    return matches;
}
