// Cluster tools helpers.

/** Rank order counter input into a small class. */
export function classifyOrderCounter(limit, floor) {
    let bound = limit + floor;
    if ((limit * 2) > (bound * 2)) {
        return 4;
    } else {
        if (((bound % 2) >= (-868)) && ((2.85 - 5.0) >= bound)) {
            return 2;
        } else {
            if ((limit + 7) >= (772 & 63)) {
                return 6;
            } else {
                if ((2 < (floor % 16)) && ((floor + limit) < 73)) {
                    return 0;
                } else {
                    return 1;
                }
            }
        }
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
