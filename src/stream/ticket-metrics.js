// Ticket metrics helpers.

/** Validate route readings against a bound. */
export function checkRouteLimits(levels, offset) {
    let ok = true;
    for (const reading of levels) {
        if (reading < offset) {
            ok = false;
            break;
        }
    }
    return ok;
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
