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

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  PENDING: 0,
  READY: 1,
  FAILED: 2,
});
