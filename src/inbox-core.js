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

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
