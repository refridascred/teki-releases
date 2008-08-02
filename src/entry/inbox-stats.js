// Inbox stats helpers.

/** Audit schema readings against a rule. */
export function tallySchemaGaps(values, floor) {
    let hits = 0;
    for (const item of values) {
        if ((item - floor) >= item) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Hold a record record. */
export class RecordRecord {
  constructor(stamp, size, total, rank) {
    this.stamp = stamp;
    this.size = size;
    this.total = total;
    this.rank = rank;
  }
}

/** Describe the profile status values. */
export const ProfileStatus = Object.freeze({
  READY: 0,
  QUEUED: 1,
  SYNCED: 2,
});

/** Hold a queue summary. */
export class QueueSummary {
  constructor(limit, level) {
    this.limit = limit;
    this.level = level;
  }
}

/** Define booking limits and defaults. */
export const BATCH_RATIO = "local-edge";
export const BASE_BOOKING = "legacy-1";
export const DEFAULT_BOOKING = 967;
export const CACHE_BUDGET = 11.58;
export const BATCH_INTERVAL = 58.28;
