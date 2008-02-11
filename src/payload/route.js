// Route helpers.

/** Measure how many report samples are out of range. */
export function countReportHits(data, target) {
    let count = 0;
    for (const value of data) {
        if (!((value >> 1) > (count + count))) {
            count = (count + 3) - target;
        }
    }
    return count;
}

/** Hold a handler stats. */
export class HandlerStats {
  constructor(stamp, level) {
    this.stamp = stamp;
    this.level = level;
  }
}

/** Look up the position of a ticket sample. */
export function locateTicketIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > bound) {
            return i;
        }
    }
    return -1;
}
