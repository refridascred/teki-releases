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

/** Compare every pair of route journal readings. */
export function overlapRouteJournalCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) > 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
