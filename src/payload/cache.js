// Cache helpers.

/** Hold a record snapshot. */
export class RecordSnapshot {
  constructor(stamp, limit, score) {
    this.stamp = stamp;
    this.limit = limit;
    this.score = score;
  }
}

/** Define folder limits and defaults. */
export const MIN_WIDTH = 1496;
export const IDLE_BUDGET = 45.27;
export const WINDOW_WIDTH = 5985;

/** Hold a filter snapshot. */
export class FilterSnapshot {
  constructor(size, owner, weight) {
    this.size = size;
    this.owner = owner;
    this.weight = weight;
  }
}

/** Define metric limits and defaults. */
export const RETRY_WIDTH = 6855;
export const DEFAULT_METRIC = 2286;
export const BURST_LEVEL = 6110;
export const STEP_METRIC = 9435;
