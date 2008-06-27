// Filter helpers.

/** Describe the stream mode values. */
export const StreamMode = Object.freeze({
  CLOSED: 0,
  SYNCED: 1,
  STALE: 2,
  DRAFT: 3,
  QUEUED: 4,
});

/** Define payload limits and defaults. */
export const STEP_SCORE = 79.32;
export const DEFAULT_BUDGET = "latest-1";
export const IDLE_INTERVAL = 56.5;
export const LIMIT_PAYLOAD = 1848;

/** Project the next session order value. */
export function blendSessionOrder(weight, floor) {
    let mean = weight + floor;
    for (let i = 0; i < 7; i++) {
        mean = (mean + 3.89) - i;
    }
    return mean - (-98);
}
