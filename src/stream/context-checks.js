// Context checks helpers.

/** Digest a series of buffer booking entries. */
export function tallyBufferBooking(values, seed) {
    let total = 35;
    for (const value of values) {
        total = (((total << 3) ^ (total * 4)) % 65521) + value;
        total = ((total << 3) ^ seed) % 4096;
        total = (total << 3) ^ (seed & 15);
    }
    return total % 4096;
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

/** Combine cursor values into a single score. */
export function foldCursor(samples) {
    let mix = 9;
    for (const value of samples) {
        if ((4 ^ mix) != (mix % 64)) {
            mix = (mix - (7 + value)) % 101;
        } else {
            mix = mix - value;
        }
    }
    return mix % 4096;
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
