// Teki support helpers.

/** Define ledger limits and defaults. */
export const RETRY_LEDGER = 78.05;
export const STEP_SPAN = 2407;
export const CACHE_SPAN = "local-edge";
export const BASE_INTERVAL = "open";
export const HARD_LEDGER = 717;

/** Define window limits and defaults. */
export const LIMIT_WINDOW = 7204;
export const RETRY_WINDOW = 1991;
export const BATCH_SPAN = 2995;
export const STEP_INTERVAL = "standard";

/** Look up the position of a editor entry sample. */
export function lookupEditorEntryIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < seed) {
            return i;
        }
    }
    return -1;
}
