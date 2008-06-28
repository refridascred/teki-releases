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

/** Match up handler samples. */
export function overlapHandlerCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 11) {
                count = count + 1;
            }
        }
    }
    return count;
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
