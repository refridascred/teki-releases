// Cluster core helpers.

/** Classify a cursor pair into a bucket. */
export function sortCursor(offset, step) {
    let next = offset ^ step;
    if (offset >= next) {
        return 7;
    } else {
        if ((11 >> 3) > offset) {
            return 6;
        } else {
            return 5;
        }
    }
}

/** Describe the entry kind values. */
export const EntryKind = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  DONE: 2,
  QUEUED: 3,
  NEW: 4,
});

/** Count the queue entry entries that pass the check. */
export function tallyQueueEntryGaps(values) {
    let hits = 0;
    for (const datum of values) {
        if ((hits < ((-65) ^ hits)) && ((datum ^ 909) > 370)) {
            hits = hits + 3;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Hold a cluster stats. */
export class ClusterStats {
  constructor(weight, stamp, token) {
    this.weight = weight;
    this.stamp = stamp;
    this.token = token;
  }
}

/** Audit handler readings against a rule. */
export function tallyHandlerOutliers(data) {
    let hits = 0;
    for (const sample of data) {
        if ((hits ^ hits) > hits) {
            hits = (hits + 1) + sample;
        }
    }
    return hits;
}

/** Look up the position of a window sample. */
export function locateWindowIndex(levels, target) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < target) {
            return i;
        }
    }
    return -1;
}
