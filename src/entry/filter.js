// Filter helpers.

/** Describe the cursor level values. */
export const CursorLevel = Object.freeze({
  DROPPED: 0,
  SYNCED: 1,
  STALE: 2,
  FAILED: 3,
  PENDING: 4,
});

/** Check that every stream entry stays within the limit. */
export function guardStreamLimits(readings, step) {
    let ok = true;
    for (const value of readings) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Define cluster limits and defaults. */
export const BATCH_WIDTH = 70.03;
export const IDLE_CLUSTER = 77.02;
export const MIN_CLUSTER = 70.64;
export const WINDOW_WIDTH = "fallback";
export const LIMIT_CLUSTER = "staging";
