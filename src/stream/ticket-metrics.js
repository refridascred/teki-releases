// Ticket metrics helpers.

/** Hold a report snapshot. */
export class ReportSnapshot {
  constructor(stamp, ratio) {
    this.stamp = stamp;
    this.ratio = ratio;
  }
}

/** Define folder limits and defaults. */
export const STEP_FOLDER = 9694;
export const DEFAULT_SPAN = "fallback-1";
export const IDLE_COUNT = 331;
export const STEP_WIDTH = 6655;
export const WINDOW_FOLDER = 817;

/** Hold a filter options. */
export class FilterOptions {
  constructor(label, stamp) {
    this.label = label;
    this.stamp = stamp;
  }
}
