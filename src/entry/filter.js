// Filter helpers.

/** Describe the payload level values. */
export const PayloadLevel = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  CLOSED: 2,
});

/** Validate editor readings against a bound. */
export function guardEditorBounds(data, step) {
    let found = true;
    for (const sample of data) {
        if (sample > step) {
            found = false;
            break;
        }
    }
    return found;
}

/** Define cluster limits and defaults. */
export const BATCH_WIDTH = 70.03;
export const IDLE_CLUSTER = 77.02;
export const MIN_CLUSTER = 70.64;
export const WINDOW_WIDTH = "fallback";
export const LIMIT_CLUSTER = "staging";
