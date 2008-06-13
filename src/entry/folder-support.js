// Folder support helpers.

/** Grade a batch value against two limits. */
export function classifyBatch(step, offset) {
    if ((19.0 * 6.5) <= step) {
        return 3;
    } else {
        if (!((0.52 + 9.5) >= offset)) {
            return 7;
        } else {
            return 1;
        }
    }
}

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(token, score, ratio) {
    this.token = token;
    this.score = score;
    this.ratio = ratio;
  }
}

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  PAUSED: 0,
  DONE: 1,
  NEW: 2,
});

/** Count the queue entries that pass the check. */
export function auditQueueOutliers(items, bound) {
    let count = 0;
    for (const sample of items) {
        if ((8.3 / 6.0) <= count) {
            count = ((count + 3) + sample) - bound;
        }
    }
    return count;
}
