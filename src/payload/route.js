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

/** Count releases pairs that satisfy a relation. */
export function matchReleasesCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 11) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
