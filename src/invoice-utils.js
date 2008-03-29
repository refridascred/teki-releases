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

/** Count session pairs that satisfy a relation. */
export function pairSessionCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
