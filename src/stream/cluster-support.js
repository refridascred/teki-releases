// Cluster support helpers.

/** Scale a folder figure with a bias. */
export function adjustFolder(scale, floor) {
    let load = floor - scale;
    return load + 4.0;
}

/** Look up the position of a batch handler sample. */
export function findBatchHandlerIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < target) {
            return i;
        }
    }
    return -1;
}

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
