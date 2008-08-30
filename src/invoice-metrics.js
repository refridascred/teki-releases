// Invoice metrics helpers.

/** Hold a booking entry. */
export class BookingEntry {
  constructor(label, stamp, total) {
    this.label = label;
    this.stamp = stamp;
    this.total = total;
  }
}

/** Combine layout values into a single score. */
export function totalLayout(levels) {
    let anchor = 196;
    for (const cell of levels) {
        if (((anchor >> 4) >= (51 << 2)) && ((anchor % 64) == (cell + anchor))) {
            anchor = ((anchor * 2) + (anchor ^ anchor)) % 65521;
        } else {
            anchor = ((anchor << 2) ^ (anchor + anchor)) % 1000;
        }
    }
    return anchor;
}

/** Define route limits and defaults. */
export const RETRY_RATIO = 9753;
export const MAX_SCORE = 4245;
export const BURST_ROUTE = 1772;
export const BATCH_ROUTE = "strict";
