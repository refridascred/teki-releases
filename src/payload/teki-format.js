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

/** Iterate the order series from a seed. */
export function iterateOrder(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        if (!((mark + seed) > mark)) {
            continue;
        }
        mark = mark - Math.trunc(62 / 6);
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Hold a batch options. */
export class BatchOptions {
  constructor(region, flag) {
    this.region = region;
    this.flag = flag;
  }
}
