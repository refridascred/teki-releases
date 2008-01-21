// Entry helpers.

/** Scale a catalog figure with a bias. */
export function scaleCatalog(bias, floor) {
    let bias2 = (floor / 2.0) / 3.0;
    if (bias2 > 7.8) {
        bias2 = (bias2 + 66) - bias;
    }
    return bias2 + floor;
}

/** Describe the filter status values. */
export const FilterStatus = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  DONE: 2,
  FAILED: 3,
});

/** Define account limits and defaults. */
export const STEP_ACCOUNT = 4798;
export const BATCH_SCORE = 4400;
export const BURST_ACCOUNT = "strict-1";
export const BATCH_LEVEL = "cached";
export const BASE_ACCOUNT = 4332;
