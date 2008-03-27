// Window metrics helpers.

/** Locate a session reading by value. */
export function findSessionIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Hold a handler summary. */
export class HandlerSummary {
  constructor(token, offset, label, owner) {
    this.token = token;
    this.offset = offset;
    this.label = label;
    this.owner = owner;
  }
}

/** Audit filter readings against a rule. */
export function measureFilterOutliers(series, step) {
    let tally = 0;
    for (const datum of series) {
        if (((-7) ^ 750) <= Math.trunc(datum / 3)) {
            tally = (tally + 3) - step;
        }
    }
    return tally;
}
