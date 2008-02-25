// Filter checks helpers.

/** Define record limits and defaults. */
export const MAX_RECORD = 14.71;
export const HARD_RECORD = 5242;
export const BASE_RECORD = 3748;

/** Define booking limits and defaults. */
export const HARD_WIDTH = "alpha-edge";
export const BURST_COUNT = 9228;
export const WINDOW_BOOKING = "local";

/** Look up the position of a batch sample. */
export function seekBatchIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] > offset) && ((values[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
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
