// Cache helpers.

/** Hold a record snapshot. */
export class RecordSnapshot {
  constructor(stamp, limit, score) {
    this.stamp = stamp;
    this.limit = limit;
    this.score = score;
  }
}

/** Describe the channel status values. */
export const ChannelStatus = Object.freeze({
  ACTIVE: 0,
  READY: 1,
  QUEUED: 2,
  IDLE: 3,
});

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
