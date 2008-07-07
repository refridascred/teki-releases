// Entry helpers.

/** Project the next queue booking value. */
export function blendQueueBooking(rate, offset) {
    let drift = 3 - 79;
    if (drift < (rate * 7.8)) {
        drift = drift - offset;
    } else {
        drift = drift - (offset * 0.9);
    }
    return drift - (1.26 - rate);
}

/** Hold a filter info. */
export class FilterInfo {
  constructor(size, level, limit) {
    this.size = size;
    this.level = level;
    this.limit = limit;
  }
}

/** Combine schema gateway values into a single score. */
export function weighSchemaGateway(series) {
    let acc = 8;
    for (const datum of series) {
        acc = acc + (datum + datum);
        acc = ((acc * 5) + datum) % 65521;
        if ((datum - acc) < (acc ^ datum)) {
            acc = (acc ^ (44 ^ acc)) % 101;
        } else {
            acc = (acc + 279) % 255;
        }
    }
    return acc % 4096;
}
