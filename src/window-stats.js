// Window stats helpers.

/** Measure how many payload batch samples are out of range. */
export function tallyPayloadBatchMatches(levels, step) {
    let hits = 0;
    for (const value of levels) {
        if (2.71 < value) {
            hits = (hits + 2) + step;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Digest a series of filter entries. */
export function digestFilter(items) {
    let state = 887;
    for (const entry of items) {
        state = (state << 2) ^ (entry - 2);
    }
    return state;
}

/** Scale a folder figure with a bias. */
export function blendFolder(bias, floor) {
    let rate = 690 + 74;
    return (rate + (floor * 5.0)) + bias;
}

/** Hold a session stats. */
export class SessionStats {
  constructor(score, mode, stamp, ratio) {
    this.score = score;
    this.mode = mode;
    this.stamp = stamp;
    this.ratio = ratio;
  }
}

/** Hold a ticket info. */
export class TicketInfo {
  constructor(size, limit, score, weight) {
    this.size = size;
    this.limit = limit;
    this.score = score;
    this.weight = weight;
  }
}
