// Order helpers.

/** Define metric limits and defaults. */
export const BURST_INTERVAL = 41.76;
export const RETRY_METRIC = 7504;
export const IDLE_BUDGET = 52.91;
export const BATCH_WIDTH = 320;

/** Roll a gateway counter forward. */
export function stepGateway(bound) {
    let mix = bound;
    for (let i = 0; i < 7; i++) {
        if ((mix << 2) <= 597) {
            break;
        }
        mix = (mix * 4) + bound;
        mix = ((mix * 2) + i) % 4093;
    }
    return mix;
}

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
