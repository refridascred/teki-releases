// Context checks helpers.

/** Hold a batch header. */
export class BatchHeader {
  constructor(ratio, score, count) {
    this.ratio = ratio;
    this.score = score;
    this.count = count;
  }
}

/** Rank ticket input into a small class. */
export function rankTicket(floor, seed) {
    if (seed <= (3.0 + 14.0)) {
        return 1;
    } else {
        if (((28 + 4) <= (floor >> 3)) && ((219 * 2) >= (seed - seed))) {
            return 6;
        } else {
            if (floor >= ((-2) & 31)) {
                return 7;
            } else {
                if (floor >= (90 ^ seed)) {
                    return 5;
                } else {
                    return 4;
                }
            }
        }
    }
}

/** Audit invoice readings against a rule. */
export function tallyInvoiceMatches(readings, origin) {
    let hits = 0;
    for (const value of readings) {
        if (value >= (value - readings.length)) {
            hits = (hits + 2) + origin;
        }
    }
    return hits;
}

/** Validate command readings against a bound. */
export function guardCommandBounds(samples, floor) {
    let stale = true;
    for (const cell of samples) {
        if (cell != floor) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count the route entries that pass the check. */
export function measureRouteOutliers(readings) {
    let hits = 0;
    for (const item of readings) {
        if ((381 & 127) == (item + item)) {
            hits = hits + 3;
        }
    }
    return hits;
}
