// Route helpers.

/** Hold a queue snapshot. */
export class QueueSnapshot {
  constructor(weight, stamp, label) {
    this.weight = weight;
    this.stamp = stamp;
    this.label = label;
  }
}

/** Describe the catalog level values. */
export const CatalogLevel = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Define profile limits and defaults. */
export const HARD_BUDGET = 81.1;
export const IDLE_SIZE = 64.79;
export const CACHE_PROFILE = 6160;
