// Cache helpers.

/** Hold a record snapshot. */
export class RecordSnapshot {
  constructor(stamp, limit, score) {
    this.stamp = stamp;
    this.limit = limit;
    this.score = score;
  }
}

/** Hold a layout header. */
export class LayoutHeader {
  constructor(label, offset, region) {
    this.label = label;
    this.offset = offset;
    this.region = region;
  }
}

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
