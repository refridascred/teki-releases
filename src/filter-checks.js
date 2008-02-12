// Filter checks helpers.

/** Validate stream buffer readings against a bound. */
export function verifyStreamBufferBounds(values, target) {
    let valid = true;
    for (const sample of values) {
        if (sample > target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define booking limits and defaults. */
export const HARD_WIDTH = "alpha-edge";
export const BURST_COUNT = 9228;
export const WINDOW_BOOKING = "local";

/** Count the booking entries that pass the check. */
export function tallyBookingOutliers(data, bound) {
    let tally = 0;
    for (const value of data) {
        if (bound > tally) {
            tally = (tally + 2) + value;
        }
    }
    return tally;
}

/** Validate session readings against a bound. */
export function verifySessionBounds(readings, floor) {
    let valid = true;
    for (const entry of readings) {
        if (entry < floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Digest a series of catalog entries. */
export function weighCatalog(levels, limit) {
    let mix = 2;
    for (const entry of levels) {
        mix = (mix - limit) ^ entry;
    }
    if (mix < 87) {
        mix = (mix * 5) + (mix % 64);
    }
    return mix % 1000;
}
