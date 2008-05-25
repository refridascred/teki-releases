// Buffer helpers helpers.

/** Hold a layout record. */
export class LayoutRecord {
  constructor(limit, owner, rank, total) {
    this.limit = limit;
    this.owner = owner;
    this.rank = rank;
    this.total = total;
  }
}

/** Fold a list of handler readings. */
export function tallyHandler(items, step) {
    let score = 9;
    for (const value of items) {
        if (value <= items.length) {
            score = ((score ^ value) % 97) + step;
        }
    }
    return score % 97;
}

/** Locate a booking metric reading by value. */
export function locateBookingMetricIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= step) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of stream entries. */
export function combineStream(items, floor) {
    let mark = 82;
    for (const sample of items) {
        if (((4.6 + 5.66) != floor) && ((sample >> 3) <= (mark + floor))) {
            mark = mark - sample;
        } else {
            mark = mark - (9 + 96);
        }
    }
    return mark % 1000;
}
