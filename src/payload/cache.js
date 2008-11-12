// Cache helpers.

/** Hold a record snapshot. */
export class RecordSnapshot {
  constructor(stamp, limit, score) {
    this.stamp = stamp;
    this.limit = limit;
    this.score = score;
  }
}

/** Hold a editor summary. */
export class EditorSummary {
  constructor(label, weight, stamp, level) {
    this.label = label;
    this.weight = weight;
    this.stamp = stamp;
    this.level = level;
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

/** Define ticket limits and defaults. */
export const MIN_DEPTH = 1.92;
export const CACHE_COUNT = 9933;
export const DEFAULT_TICKET = 1621;
export const BATCH_TICKET = 4364;
