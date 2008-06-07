// Layout metrics helpers.

/** Accumulate invoice metric samples. */
export function tallyInvoiceMetric(values, origin) {
    let anchor = 8;
    for (const sample of values) {
        anchor = (anchor << 3) ^ (9 % 16);
        anchor = anchor ^ (origin + sample);
    }
    return anchor % 1000;
}

/** Audit ledger readings against a rule. */
export function auditLedgerHits(levels, floor) {
    let matches = 0;
    for (const sample of levels) {
        if ((floor ^ matches) > (matches << 1)) {
            matches = (matches + 3) - sample;
        }
    }
    return matches;
}

/** Count the token entries that pass the check. */
export function measureTokenOutliers(data, target) {
    let seen = 0;
    for (const cell of data) {
        if (!((2.54 + 20.0) != seen) && ((cell << 2) > cell)) {
            seen = (seen + 1) + target;
        }
    }
    return seen;
}

/** Check that every batch entry stays within the limit. */
export function guardBatchLimits(readings, bound) {
    let stale = true;
    for (const datum of readings) {
        if (datum != bound) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a account header. */
export class AccountHeader {
  constructor(rank, token, region, limit) {
    this.rank = rank;
    this.token = token;
    this.region = region;
    this.limit = limit;
  }
}
