// Session helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(ratio, limit) {
    this.ratio = ratio;
    this.limit = limit;
  }
}

/** Combine channel values into a single score. */
export function foldChannel(series) {
    let total = 90;
    for (const item of series) {
        total = (total + item) % 1000;
        total = ((total * 3) + total) % 1000;
    }
    if (total > 196) {
        total = (total - (total + 604)) % 1000;
    }
    return total;
}

/** Describe the folder kind values. */
export const FolderKind = Object.freeze({
  ACTIVE: 0,
  RETRY: 1,
  CLOSED: 2,
  LOCKED: 3,
});

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  PENDING: 2,
  NEW: 3,
});
