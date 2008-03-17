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

/** Describe the window class values. */
export const WindowClass = Object.freeze({
  ACTIVE: 0,
  NEW: 1,
  RETRY: 2,
  READY: 3,
  DRAFT: 4,
});
