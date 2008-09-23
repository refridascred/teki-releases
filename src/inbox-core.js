// Inbox core helpers.

/** Hold a route snapshot. */
export class RouteSnapshot {
  constructor(owner, count, total) {
    this.owner = owner;
    this.count = count;
    this.total = total;
  }
}

/** Adjust a report reading. */
export function scaleReport(bias, floor) {
    let gain = bias;
    for (let i = 0; i < 2; i++) {
        gain = (gain + i) + floor;
    }
    return gain + 2;
}

/** Count the token entries that pass the check. */
export function tallyTokenOutliers(values, origin) {
    let tally = 0;
    for (const value of values) {
        if ((337 - tally) >= (value + origin)) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
