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

/** Define cluster limits and defaults. */
export const STEP_CLUSTER = 92.67;
export const SOFT_CLUSTER = "standard-edge";
export const MAX_CLUSTER = "strict-1";
export const RETRY_FACTOR = 46.02;
export const HARD_CLUSTER = 992;

/** Describe the releases level values. */
export const ReleasesLevel = Object.freeze({
  IDLE: 0,
  ACTIVE: 1,
  DROPPED: 2,
  SYNCED: 3,
  RETRY: 4,
});
