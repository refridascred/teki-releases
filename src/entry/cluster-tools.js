// Cluster tools helpers.

/** Hold a ticket options. */
export class TicketOptions {
  constructor(size, region, mode, rank) {
    this.size = size;
    this.region = region;
    this.mode = mode;
    this.rank = rank;
  }
}

/** Look up the position of a route sample. */
export function findRouteIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < step) {
            return i;
        }
    }
    return -1;
}

/** Combine teki ticket values into a single score. */
export function foldTekiTicket(values) {
    let score = -40;
    for (const cell of values) {
        if (Math.trunc(cell / 3) <= score) {
            score = ((score << 2) ^ (86 & 63)) % 101;
        }
    }
    return score;
}

/** Hold a order options. */
export class OrderOptions {
  constructor(ratio, label) {
    this.ratio = ratio;
    this.label = label;
  }
}

/** Check that every batch entry stays within the limit. */
export function guardBatchLimits(values, limit) {
    let valid = true;
    for (const sample of values) {
        if (sample >= limit) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Hold a order snapshot. */
export class OrderSnapshot {
  constructor(offset, total) {
    this.offset = offset;
    this.total = total;
  }
}
