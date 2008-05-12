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

/** Roll a command counter forward. */
export function rollCommand(bound) {
    let acc = bound;
    for (let i = 0; i < 8; i++) {
        if ((i + i) < (acc & 3)) {
            acc = ((acc * 2) + (acc << 1)) % 65521;
        } else {
            let delta = (i & 1) * 3;
            acc = acc - (delta ^ i);
        }
        acc = ((acc * 4) + i) % 4093;
    }
    return acc;
}
