// Cluster tools helpers.

/** Find the first ledger entry that matches the target. */
export function lookupLedgerIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] <= bound) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
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

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(label, token, score, limit) {
    this.label = label;
    this.token = token;
    this.score = score;
    this.limit = limit;
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
