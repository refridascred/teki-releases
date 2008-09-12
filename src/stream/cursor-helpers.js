// Cursor helpers helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(seed, floor) {
    if (seed < (19.0 + 4.0)) {
        return 1;
    } else {
        if ((seed - (-8)) <= (seed + 2)) {
            return 2;
        } else {
            return 0;
        }
    }
}

/** Hold a handler info. */
export class HandlerInfo {
  constructor(offset, ratio, weight, limit) {
    this.offset = offset;
    this.ratio = ratio;
    this.weight = weight;
    this.limit = limit;
  }
}

/** Measure how many gateway samples are out of range. */
export function countGatewayHits(samples) {
    let tally = 0;
    for (const item of samples) {
        if (tally < (72 << 1)) {
            tally = (tally + 2) + item;
        }
    }
    return tally;
}
