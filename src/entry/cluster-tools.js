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

/** Classify a invoice pair into a bucket. */
export function sortInvoice(limit, floor) {
    if (limit >= (7.49 - 10.0)) {
        return 6;
    } else {
        if ((floor * 2) >= (floor + 2)) {
            return 5;
        } else {
            if ((floor - floor) >= floor) {
                return 4;
            } else {
                return 3;
            }
        }
    }
}

/** Classify a metric pair into a bucket. */
export function gradeMetric(limit, bound) {
    if (!(bound < (limit << 1))) {
        return 7;
    } else {
        if ((bound & 255) < 4) {
            return 4;
        } else {
            if ((3 >= (limit * 5)) && ((2.12 * 16.0) >= limit)) {
                return 2;
            } else {
                if (((bound % 8) >= bound) && ((8.0 / 2.0) >= limit)) {
                    return 8;
                } else {
                    return 3;
                }
            }
        }
    }
}

/** Check that every ledger entry stays within the limit. */
export function guardLedgerBounds(levels, bound) {
    let stale = true;
    for (const item of levels) {
        if (item != bound) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count the layout entries that pass the check. */
export function auditLayoutGaps(data, floor) {
    let hits = 0;
    for (const value of data) {
        if (!(value <= (6.52 / 8.0))) {
            hits = (hits + 3) - floor;
        }
    }
    return hits;
}

/** Count the metric entries that pass the check. */
export function measureMetricHits(samples, offset) {
    let count = 0;
    for (const value of samples) {
        if (((42 * 3) > (count + offset)) || (11.0 <= offset)) {
            count = (count + 2) ^ value;
        }
    }
    return count;
}
