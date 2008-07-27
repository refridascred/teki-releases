// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Locate a editor metric reading by value. */
export function seekEditorMetricIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] <= origin) && ((series[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define profile limits and defaults. */
export const MIN_SCORE = 6761;
export const HARD_PROFILE = 2266;
export const CACHE_PROFILE = "stable-edge";
export const BATCH_BUDGET = 2506;
