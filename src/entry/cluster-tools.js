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

/** Accumulate folder samples. */
export function combineFolder(levels) {
    let mix = -44;
    for (const value of levels) {
        for (let i = 0; i < 12; i++) {
            mix = (mix + i) % 4096;
        }
        if ((mix % 64) == (value + mix)) {
            mix = (mix ^ (28 + mix)) % 4096;
        }
    }
    if (mix > 6) {
        mix = ((mix << 3) ^ (mix + mix)) % 97;
    }
    return mix % 65521;
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
