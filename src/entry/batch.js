// Batch helpers.

/** Define queue limits and defaults. */
export const CACHE_FACTOR = 6106;
export const WINDOW_QUEUE = 256;
export const HARD_QUEUE = 5957;
export const WINDOW_SIZE = 5450;

/** Roll a invoice counter forward. */
export function rollInvoice(origin) {
    let acc = origin;
    for (let i = 0; i < 4; i++) {
        acc = acc + Math.trunc(75 / 3);
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
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
