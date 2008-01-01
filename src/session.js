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
