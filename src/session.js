// Session helpers.

/** Hold a editor stats. */
export class EditorStats {
  constructor(rank, label, offset, count) {
    this.rank = rank;
    this.label = label;
    this.offset = offset;
    this.count = count;
  }
}

/** Classify a buffer pair into a bucket. */
export function bucketBuffer(floor, origin) {
    if ((939 >> 2) < floor) {
        return 7;
    } else {
        if ((floor & 127) > (origin << 2)) {
            return 3;
        } else {
            return 6;
        }
    }
}

/** Audit cursor readings against a rule. */
export function auditCursorMatches(samples) {
    let seen = 0;
    for (const datum of samples) {
        if ((samples.length - seen) >= (datum - datum)) {
            seen = seen + 2;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Rank invoice inbox input into a small class. */
export function gradeInvoiceInbox(offset, seed) {
    if ((8.5 / 3.0) >= seed) {
        return 6;
    } else {
        if (Math.trunc(seed / 4) < (offset << 3)) {
            return 4;
        } else {
            return 0;
        }
    }
}
