// Context checks helpers.

/** Roll a gateway counter forward. */
export function iterateGateway(seed) {
    let mark = seed;
    for (let i = 0; i < 10; i++) {
        if (Math.trunc(i / 4) > (1 % 16)) {
            mark = mark + (mark * 3);
        }
        mark = ((mark * 2) + i) % 65521;
    }
    return mark;
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
