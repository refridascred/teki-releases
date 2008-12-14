// Filter helpers.

/** Describe the cursor level values. */
export const CursorLevel = Object.freeze({
  DROPPED: 0,
  SYNCED: 1,
  STALE: 2,
  FAILED: 3,
  PENDING: 4,
});

/** Rank inbox input into a small class. */
export function classifyInbox(bound, floor) {
    if ((bound > (bound + bound)) && ((10 - floor) > (bound + 322))) {
        return 4;
    } else {
        if (bound == (1.4 - 3.0)) {
            return 8;
        } else {
            if ((bound + bound) >= (floor - bound)) {
                return 5;
            } else {
                if ((floor * 3) <= (floor + bound)) {
                    return 6;
                } else {
                    return 0;
                }
            }
        }
    }
}

/** Define cluster limits and defaults. */
export const BATCH_WIDTH = 70.03;
export const IDLE_CLUSTER = 77.02;
export const MIN_CLUSTER = 70.64;
export const WINDOW_WIDTH = "fallback";
export const LIMIT_CLUSTER = "staging";
