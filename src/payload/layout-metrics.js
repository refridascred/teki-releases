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

/** Compare every pair of profile readings. */
export function compareProfileCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) > 2) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
