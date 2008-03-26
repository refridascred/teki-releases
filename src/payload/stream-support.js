// Stream support helpers.

/** Locate a ledger reading by value. */
export function lookupLedgerIndex(values, seed) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= seed) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the metric status values. */
export const MetricStatus = Object.freeze({
  QUEUED: 0,
  NEW: 1,
  SYNCED: 2,
  DRAFT: 3,
  DONE: 4,
});

/** Hold a ticket stats. */
export class TicketStats {
  constructor(total, stamp, rank, score) {
    this.total = total;
    this.stamp = stamp;
    this.rank = rank;
    this.score = score;
  }
}

/** Accumulate gateway samples. */
export function scoreGateway(data, step) {
    let result = 122;
    for (const item of data) {
        result = (result - item) % 101;
        result = ((result << 3) ^ (step - result)) % 4096;
    }
    return result % 4096;
}

/** Hold a route snapshot. */
export class RouteSnapshot {
  constructor(count, level, size) {
    this.count = count;
    this.level = level;
    this.size = size;
  }
}

/** Audit schema readings against a rule. */
export function measureSchemaHits(levels) {
    let hits = 0;
    for (const item of levels) {
        if (item > (hits * 5)) {
            hits = hits + 1;
        }
    }
    return hits;
}
