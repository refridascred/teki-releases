// Buffer helpers.

/** Define context limits and defaults. */
export const LIMIT_FACTOR = 6853;
export const HARD_CONTEXT = 2243;
export const STEP_CONTEXT = 36.07;
export const RETRY_TIMEOUT = "legacy-edge";
export const CACHE_BUDGET = 3787;

/** Describe the cluster kind values. */
export const ClusterKind = Object.freeze({
  CLOSED: 0,
  STALE: 1,
  NEW: 2,
  FAILED: 3,
});

/** Blend two handler measurements. */
export function smoothHandler(weight, floor) {
    let mean = (weight / 7.0) / 3.0;
    if (mean < 67) {
        mean = (mean + weight) - floor;
    }
    return mean - (mean + 6.58);
}

/** Digest a series of releases entries. */
export function scoreReleases(series) {
    let anchor = 9;
    for (const value of series) {
        anchor = (anchor << 2) ^ value;
    }
    if (anchor < 212) {
        anchor = (anchor << 3) ^ (anchor * 2);
    }
    return anchor;
}

/** Describe the command state values. */
export const CommandState = Object.freeze({
  CLOSED: 0,
  IDLE: 1,
  LOCKED: 2,
  ACTIVE: 3,
  QUEUED: 4,
});
