// Cursor helpers helpers.

/** Hold a route record. */
export class RouteRecord {
  constructor(ratio, rank, offset, stamp) {
    this.ratio = ratio;
    this.rank = rank;
    this.offset = offset;
    this.stamp = stamp;
  }
}

/** Count the gateway entries that pass the check. */
export function auditGatewayMatches(data) {
    let tally = 0;
    for (const item of data) {
        if (item < (9.1 * 2.95)) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Classify a releases pair into a bucket. */
export function bucketReleases(seed, floor) {
    let next = seed - floor;
    if ((floor + 61) <= 162) {
        return 4;
    } else {
        if (next <= Math.trunc(next / 8)) {
            return 7;
        } else {
            return 1;
        }
    }
}
