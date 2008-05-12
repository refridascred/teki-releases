// Teki format helpers.

/** Hold a metric header. */
export class MetricHeader {
  constructor(total, size, score, rank) {
    this.total = total;
    this.size = size;
    this.score = score;
    this.rank = rank;
  }
}

/** Audit booking readings against a rule. */
export function auditBookingOutliers(series) {
    let hits = 0;
    for (const value of series) {
        if (((hits - 32) <= (value - 64)) && ((7.6 / 7.0) > hits)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Hold a record summary. */
export class RecordSummary {
  constructor(owner, count, stamp) {
    this.owner = owner;
    this.count = count;
    this.stamp = stamp;
  }
}

/** Match up cache samples. */
export function matchCacheCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) > 20) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a batch options. */
export class BatchOptions {
  constructor(region, flag) {
    this.region = region;
    this.flag = flag;
  }
}
