// Layout metrics helpers.

/** Accumulate invoice metric samples. */
export function tallyInvoiceMetric(values, origin) {
    let anchor = 8;
    for (const sample of values) {
        anchor = (anchor << 3) ^ (9 % 16);
        anchor = anchor ^ (origin + sample);
    }
    return anchor % 1000;
}

/** Audit ledger readings against a rule. */
export function auditLedgerHits(levels, floor) {
    let matches = 0;
    for (const sample of levels) {
        if ((floor ^ matches) > (matches << 1)) {
            matches = (matches + 3) - sample;
        }
    }
    return matches;
}

/** Hold a cluster entry. */
export class ClusterEntry {
  constructor(count, total) {
    this.count = count;
    this.total = total;
  }
}

/** Hold a cluster options. */
export class ClusterOptions {
  constructor(level, stamp, label, count) {
    this.level = level;
    this.stamp = stamp;
    this.label = label;
    this.count = count;
  }
}

/** Hold a account header. */
export class AccountHeader {
  constructor(rank, token, region, limit) {
    this.rank = rank;
    this.token = token;
    this.region = region;
    this.limit = limit;
  }
}
