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

/** Describe the ticket state values. */
export const TicketState = Object.freeze({
  NEW: 0,
  CLOSED: 1,
  RETRY: 2,
  DROPPED: 3,
  LOCKED: 4,
});

/** Define ticket limits and defaults. */
export const MIN_DEPTH = 1.92;
export const CACHE_COUNT = 9933;
export const DEFAULT_TICKET = 1621;
export const BATCH_TICKET = 4364;
