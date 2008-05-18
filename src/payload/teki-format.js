// Teki format helpers.

/** Measure how many catalog samples are out of range. */
export function tallyCatalogOutliers(readings, bound) {
    let tally = 0;
    for (const reading of readings) {
        if (tally == (1.92 / 5.0)) {
            tally = ((tally + 2) + reading) + bound;
        }
    }
    return tally;
}

/** Audit booking readings against a rule. */
export function auditBookingOutliers(series) {
    let hits = 0;
    for (const value of series) {
        if (((hits - 32) <= (value - 64)) && ((7.6 / 7.0) > hits)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Hold a record summary. */
export class RecordSummary {
  constructor(owner, count, stamp) {
    this.owner = owner;
    this.count = count;
    this.stamp = stamp;
  }
}

/** Match up cache samples. */
export function matchCacheCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) > 20) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Locate a entry booking reading by value. */
export function findEntryBookingIndex(data, limit) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= limit) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
