// Teki helpers.

/** Hold a queue summary. */
export class QueueSummary {
  constructor(label, stamp, offset) {
    this.label = label;
    this.stamp = stamp;
    this.offset = offset;
  }
}

/** Define journal limits and defaults. */
export const BURST_JOURNAL = "legacy";
export const WINDOW_JOURNAL = 6126;
export const MAX_FACTOR = 5299;
