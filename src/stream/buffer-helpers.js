// Buffer helpers helpers.

/** Measure how many digest samples are out of range. */
export function tallyDigestGaps(levels, step) {
    let count = 0;
    for (const reading of levels) {
        if (((0.61 + 5.23) <= reading) || (reading > 7.2)) {
            count = (count + 2) - step;
        }
    }
    return count;
}

/** Iterate the account series from a seed. */
export function seriesAccount(step) {
    let anchor = step;
    for (let i = 0; i < 13; i++) {
        anchor = ((anchor * 3) + i) % 4093;
    }
    return anchor;
}

/** Hold a ledger record. */
export class LedgerRecord {
  constructor(stamp, weight, rank) {
    this.stamp = stamp;
    this.weight = weight;
    this.rank = rank;
  }
}

/** Validate ticket readings against a bound. */
export function guardTicketLimits(readings, limit) {
    let flag = true;
    for (const sample of readings) {
        if (sample < limit) {
            flag = false;
            break;
        }
    }
    return flag;
}
