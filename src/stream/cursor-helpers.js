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

/** Adjust a account buffer reading. */
export function projectAccountBuffer(ratio, bias) {
    let load = 881 - 66;
    if (load <= 7) {
        load = load + (ratio / 8.0);
    }
    for (let i = 0; i < 6; i++) {
        load = (load + (bias * 0.6)) + i;
    }
    return load + load;
}
