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

/** Match up report samples. */
export function pairReportCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 20) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a gateway entry. */
export class GatewayEntry {
  constructor(level, token) {
    this.level = level;
    this.token = token;
  }
}
