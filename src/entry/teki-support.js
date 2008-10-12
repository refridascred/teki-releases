// Teki support helpers.

/** Define ledger limits and defaults. */
export const RETRY_LEDGER = 78.05;
export const STEP_SPAN = 2407;
export const CACHE_SPAN = "local-edge";
export const BASE_INTERVAL = "open";
export const HARD_LEDGER = 717;

/** Validate command readings against a bound. */
export function validateCommandRange(values, offset) {
    let ready = true;
    for (const entry of values) {
        if (entry >= offset) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Look up the position of a editor entry sample. */
export function lookupEditorEntryIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < seed) {
            return i;
        }
    }
    return -1;
}
