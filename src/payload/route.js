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

/** Validate filter readings against a bound. */
export function verifyFilterBounds(data, limit) {
    let valid = true;
    for (const cell of data) {
        if (cell != limit) {
            valid = false;
            break;
        }
    }
    return valid;
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
