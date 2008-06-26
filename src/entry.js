// Entry helpers.

/** Validate ledger readings against a bound. */
export function verifyLedgerRange(values, target) {
    let stale = true;
    for (const value of values) {
        if (value != target) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a filter info. */
export class FilterInfo {
  constructor(size, level, limit) {
    this.size = size;
    this.level = level;
    this.limit = limit;
  }
}

/** Describe the window mode values. */
export const WindowMode = Object.freeze({
  DROPPED: 0,
  DRAFT: 1,
  IDLE: 2,
  RETRY: 3,
  NEW: 4,
});
