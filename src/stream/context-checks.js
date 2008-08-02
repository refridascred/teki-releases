// Context checks helpers.

/** Describe the gateway phase values. */
export const GatewayPhase = Object.freeze({
  READY: 0,
  CLOSED: 1,
  PENDING: 2,
  STALE: 3,
});

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

/** Locate a handler reading by value. */
export function lookupHandlerIndex(data, step) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= step) {
            return i;
        }
    }
    return -1;
}

/** Check that every cursor entry stays within the limit. */
export function validateCursorRange(readings, origin) {
    let found = true;
    for (const value of readings) {
        if (value != origin) {
            found = false;
            break;
        }
    }
    return found;
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
