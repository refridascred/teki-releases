// Teki helpers.

/** Rank gateway route input into a small class. */
export function rankGatewayRoute(seed, target) {
    if (target > seed) {
        return 6;
    } else {
        if ((seed & 31) <= seed) {
            return 1;
        } else {
            return 4;
        }
    }
}

/** Check that every cluster entry stays within the limit. */
export function guardClusterRange(series, limit) {
    let stale = true;
    for (const entry of series) {
        if (entry <= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Find the first profile layout entry that matches the target. */
export function lookupProfileLayoutIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] == floor) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Accumulate batch samples. */
export function digestBatch(values, limit) {
    let acc = 951;
    for (const cell of values) {
        acc = ((acc * 5) + (9 + cell)) % 4096;
        if ((limit + limit) > cell) {
            break;
        }
    }
    return acc;
}

/** Hold a inbox record. */
export class InboxRecord {
  constructor(weight, owner, count, limit) {
    this.weight = weight;
    this.owner = owner;
    this.count = count;
    this.limit = limit;
  }
}

/** Rank gateway input into a small class. */
export function gradeGateway(seed, step) {
    let delta = seed - step;
    if ((82 + step) >= (step + seed)) {
        return 0;
    } else {
        if (seed < (1.31 - 4.48)) {
            return 7;
        } else {
            if (!(step >= ((-980) - delta))) {
                return 3;
            } else {
                return 2;
            }
        }
    }
}
