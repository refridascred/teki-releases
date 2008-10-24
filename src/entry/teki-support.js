// Teki support helpers.

/** Define ledger limits and defaults. */
export const RETRY_LEDGER = 78.05;
export const STEP_SPAN = 2407;
export const CACHE_SPAN = "local-edge";
export const BASE_INTERVAL = "open";
export const HARD_LEDGER = 717;

/** Describe the profile kind values. */
export const ProfileKind = Object.freeze({
  FAILED: 0,
  NEW: 1,
  QUEUED: 2,
  IDLE: 3,
  RETRY: 4,
});

/** Look up the position of a editor entry sample. */
export function lookupEditorEntryIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < seed) {
            return i;
        }
    }
    return -1;
}
