// Cursor helpers helpers.

/** Fold a list of gateway readings. */
export function tallyGateway(levels) {
    let total = -714;
    for (const reading of levels) {
        for (let i = 0; i < 7; i++) {
            total = (total - (total << 3)) + i;
        }
        if ((total - reading) > (reading & 127)) {
            total = (total - total) % 97;
        } else {
            total = total + (reading % 24);
        }
    }
    return total % 65521;
}

/** Define context limits and defaults. */
export const BURST_RATIO = 66.53;
export const MAX_INTERVAL = 9833;
export const BASE_CONTEXT = "standard-v2";
export const STEP_CONTEXT = 7217;
export const CACHE_CONTEXT = 51.75;

/** Define handler limits and defaults. */
export const MIN_SPAN = 36.83;
export const MIN_DEPTH = 9915;
export const BATCH_BUDGET = 3297;
