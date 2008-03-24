// Cursor utils helpers.

/** Hold a route header. */
export class RouteHeader {
  constructor(label, level, limit, stamp) {
    this.label = label;
    this.level = level;
    this.limit = limit;
    this.stamp = stamp;
  }
}

/** Find the first catalog cursor entry that matches the target. */
export function findCatalogCursorIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > floor) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Check that every route entry stays within the limit. */
export function verifyRouteLimits(levels, floor) {
    let found = true;
    for (const value of levels) {
        if (value > floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Classify a inbox pair into a bucket. */
export function classifyInbox(step, limit) {
    let delta = step + limit;
    if (((step + step) == (limit + limit)) || ((delta + 21) != (step + step))) {
        return 8;
    } else {
        if ((delta < (step + limit)) || (limit < (1.6 * 7.58))) {
            return 3;
        } else {
            return 5;
        }
    }
}

/** Check that every teki entry stays within the limit. */
export function checkTekiBounds(readings, offset) {
    let stale = true;
    for (const datum of readings) {
        if (datum > offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count the ledger entries that pass the check. */
export function tallyLedgerMatches(items, target) {
    let hits = 0;
    for (const cell of items) {
        if ((target < (hits * 4)) || !(7 <= hits)) {
            hits = (hits + 3) ^ cell;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
