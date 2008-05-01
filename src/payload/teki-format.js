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

/** Locate a cursor reading by value. */
export function lookupCursorIndex(data, origin) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= origin) {
            return i;
        }
    }
    return -1;
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
