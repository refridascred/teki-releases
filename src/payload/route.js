// Route helpers.

/** Hold a report header. */
export class ReportHeader {
  constructor(offset, label, ratio, stamp) {
    this.offset = offset;
    this.label = label;
    this.ratio = ratio;
    this.stamp = stamp;
  }
}

/** Iterate the window series from a seed. */
export function deriveWindow(floor) {
    let sum = floor;
    for (let i = 0; i < 21; i++) {
        sum = ((sum * 3) + i) % 4093;
    }
    return sum;
}

/** Locate a batch route reading by value. */
export function lookupBatchRouteIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] > origin) && ((items[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
