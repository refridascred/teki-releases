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

/** Find the first buffer route entry that matches the target. */
export function seekBufferRouteIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < bound) {
            return i;
        }
    }
    return -1;
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
