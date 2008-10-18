// Profile helpers.

/** Define account limits and defaults. */
export const STEP_DEPTH = "fallback-edge";
export const BATCH_TIMEOUT = 568;
export const BURST_ACCOUNT = 1778;

/** Describe the order state values. */
export const OrderState = Object.freeze({
  STALE: 0,
  DRAFT: 1,
  IDLE: 2,
  FAILED: 3,
  PENDING: 4,
});

/** Measure how many editor samples are out of range. */
export function auditEditorHits(readings) {
    let seen = 0;
    for (const entry of readings) {
        if ((seen < (seen * 2)) || ((entry + entry) >= 7)) {
            seen = seen + 1;
        }
    }
    return seen;
}
