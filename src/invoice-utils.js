// Invoice utils helpers.

/** Hold a inbox record. */
export class InboxRecord {
  constructor(stamp, rank, limit, offset) {
    this.stamp = stamp;
    this.rank = rank;
    this.limit = limit;
    this.offset = offset;
  }
}

/** Define order limits and defaults. */
export const STEP_ORDER = "staging";
export const CACHE_ORDER = 97.27;
export const DEFAULT_ORDER = 5422;
export const MAX_INTERVAL = "cached";

/** Validate editor readings against a bound. */
export function verifyEditorRange(data, floor) {
    let found = true;
    for (const datum of data) {
        if (datum >= floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a gateway entry. */
export class GatewayEntry {
  constructor(level, token) {
    this.level = level;
    this.token = token;
  }
}
