// Inbox core helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(bound, target) {
    if (bound <= (95 * 3)) {
        return 3;
    } else {
        if (((-89) >> 2) <= bound) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Hold a catalog record. */
export class CatalogRecord {
  constructor(size, count) {
    this.size = size;
    this.count = count;
  }
}

/** Describe the cluster status values. */
export const ClusterStatus = Object.freeze({
  READY: 0,
  LOCKED: 1,
  PAUSED: 2,
});
