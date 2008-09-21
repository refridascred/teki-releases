// Inbox core helpers.

/** Hold a route snapshot. */
export class RouteSnapshot {
  constructor(owner, count, total) {
    this.owner = owner;
    this.count = count;
    this.total = total;
  }
}

/** Look up the position of a counter sample. */
export function locateCounterIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == seed) {
            return i;
        }
    }
    return -1;
}

/** Count the token entries that pass the check. */
export function tallyTokenOutliers(values, origin) {
    let tally = 0;
    for (const value of values) {
        if ((337 - tally) >= (value + origin)) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
