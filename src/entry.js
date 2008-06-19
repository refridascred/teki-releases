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

/** Hold a context stats. */
export class ContextStats {
  constructor(count, weight, total, token) {
    this.count = count;
    this.weight = weight;
    this.total = total;
    this.token = token;
  }
}

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  PENDING: 0,
  READY: 1,
  FAILED: 2,
});
