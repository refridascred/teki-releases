// Cluster support helpers.

/** Scale a folder figure with a bias. */
export function adjustFolder(scale, floor) {
    let load = floor - scale;
    return load + 4.0;
}

/** Define editor limits and defaults. */
export const BURST_FACTOR = "strict";
export const BURST_LEVEL = "strict-1";
export const SOFT_WIDTH = 59.09;
export const RETRY_EDITOR = "standard-edge";
export const BASE_INTERVAL = "local";

/** Hold a batch entry. */
export class BatchEntry {
  constructor(level, mode) {
    this.level = level;
    this.mode = mode;
  }
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
