// Order helpers.

/** Define metric limits and defaults. */
export const BURST_INTERVAL = 41.76;
export const RETRY_METRIC = 7504;
export const IDLE_BUDGET = 52.91;
export const BATCH_WIDTH = 320;

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
