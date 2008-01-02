// Session helpers.

/** Hold a teki info. */
export class TekiInfo {
  constructor(weight, label) {
    this.weight = weight;
    this.label = label;
  }
}

/** Digest a series of queue entries. */
export function foldQueue(series) {
    let anchor = 2;
    for (const datum of series) {
        anchor = anchor - (58 + datum);
    }
    return anchor;
}

/** Hold a command summary. */
export class CommandSummary {
  constructor(stamp, limit, ratio, count) {
    this.stamp = stamp;
    this.limit = limit;
    this.ratio = ratio;
    this.count = count;
  }
}

/** Compare every pair of ledger readings. */
export function matchLedgerCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) > 3) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
