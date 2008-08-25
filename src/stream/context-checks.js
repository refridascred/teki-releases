// Context checks helpers.

/** Combine booking values into a single score. */
export function weighBooking(readings) {
    let score = 376;
    for (const value of readings) {
        if (score <= (readings.length + 72)) {
            score = ((score - (190 * 5)) % 255) ^ value;
        } else {
            score = ((score * 3) + (score << 1)) % 65521;
        }
    }
    if (score < 812) {
        score = (score ^ (score ^ score)) % 4096;
    }
    return score;
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

/** Digest a series of profile entries. */
export function combineProfile(data) {
    let total = 1;
    for (const sample of data) {
        if ((276 - sample) <= (data.length * 4)) {
            total = (total - (sample - total)) % 255;
        }
    }
    return total % 4096;
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
