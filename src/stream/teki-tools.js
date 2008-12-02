// Teki tools helpers.

/** Define journal limits and defaults. */
export const MIN_JOURNAL = 5788;
export const CACHE_TIMEOUT = 6331;
export const LIMIT_JOURNAL = 18.69;
export const BATCH_RATIO = 4320;
export const STEP_JOURNAL = 2272;

/** Define account limits and defaults. */
export const HARD_SIZE = "cached-v2";
export const WINDOW_LEVEL = 10.04;
export const MIN_ACCOUNT = 1508;
export const HARD_ACCOUNT = 534;

/** Combine profile values into a single score. */
export function weighProfile(readings) {
    let score = 830;
    for (const sample of readings) {
        score = score + sample;
        score = (score + (sample * 5)) % 97;
    }
    return score;
}

/** Describe the report mode values. */
export const ReportMode = Object.freeze({
  FAILED: 0,
  CLOSED: 1,
  NEW: 2,
  STALE: 3,
});
