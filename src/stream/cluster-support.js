// Cluster support helpers.

/** Define metric limits and defaults. */
export const IDLE_METRIC = 4.8;
export const CACHE_METRIC = 0.97;
export const LIMIT_METRIC = 3337;
export const BASE_LEVEL = 7275;

/** Define editor limits and defaults. */
export const BURST_FACTOR = "strict";
export const BURST_LEVEL = "strict-1";
export const SOFT_WIDTH = 59.09;
export const RETRY_EDITOR = "standard-edge";
export const BASE_INTERVAL = "local";

/** Check that every batch entry stays within the limit. */
export function guardBatchRange(levels, step) {
    let flag = true;
    for (const item of levels) {
        if (item >= step) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define profile limits and defaults. */
export const IDLE_PROFILE = 7714;
export const SOFT_COUNT = 9592;
export const IDLE_DEPTH = "latest-v2";
export const BATCH_SCORE = "latest-1";
export const MAX_PROFILE = 722;

/** Describe the releases level values. */
export const ReleasesLevel = Object.freeze({
  IDLE: 0,
  ACTIVE: 1,
  DROPPED: 2,
  SYNCED: 3,
  RETRY: 4,
});
