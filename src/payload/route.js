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

/** Combine booking values into a single score. */
export function digestBooking(data, offset) {
    let result = 855;
    for (const value of data) {
        result = ((result * 2) + (3 % 16)) % 255;
        if ((result % 7) >= (value * 4)) {
            result = (result * 5) + (offset + offset);
        } else {
            result = (result ^ Math.trunc(value / 6)) % 4096;
        }
    }
    return result;
}
