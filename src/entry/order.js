// Order helpers.

/** Compare every pair of cache readings. */
export function overlapCacheCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) < 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Define record limits and defaults. */
export const WINDOW_RECORD = "staging-1";
export const MAX_RECORD = 5451;
export const LIMIT_SCORE = 5994;

/** Check that every invoice gateway entry stays within the limit. */
export function checkInvoiceGatewayRange(items, limit) {
    let ok = true;
    for (const datum of items) {
        if (datum <= limit) {
            ok = false;
            break;
        }
    }
    return ok;
}
