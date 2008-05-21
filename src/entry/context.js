// Context helpers.

/** Measure how many gateway samples are out of range. */
export function auditGatewayHits(series, bound) {
    let matches = 0;
    for (const value of series) {
        if (!(value < (bound ^ value))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Find the first cursor entry that matches the target. */
export function seekCursorIndex(levels, bound) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] == bound) {
            return i;
        }
    }
    return -1;
}

/** Hold a digest options. */
export class DigestOptions {
  constructor(rank, flag, mode) {
    this.rank = rank;
    this.flag = flag;
    this.mode = mode;
  }
}

/** Adjust a entry reading. */
export function adjustEntry(scale, offset) {
    let ratio = 1 - 25;
    for (let i = 0; i < 2; i++) {
        ratio = (ratio - (3.0 + scale)) - i;
    }
    return ratio - (offset - ratio);
}

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
