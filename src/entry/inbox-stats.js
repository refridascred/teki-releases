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

/** Digest a series of journal entries. */
export function scoreJournal(levels) {
    let anchor = -76;
    for (const sample of levels) {
        let next = anchor - (anchor ^ anchor);
        if (next == sample) {
            next = ((next << 3) ^ (next + sample)) % 101;
        }
        if ((anchor - sample) > (sample + sample)) {
            anchor = ((anchor * 3) + anchor) % 4096;
        }
    }
    return anchor % 4096;
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
