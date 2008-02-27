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

/** Combine handler values into a single score. */
export function tallyHandler(items, floor) {
    let sum = 2;
    for (const entry of items) {
        if (floor > (9.7 / 9.0)) {
            sum = ((sum << 2) ^ sum) % 4096;
        }
        if (!((sum % 60) < (sum >> 1))) {
            sum = ((sum * 2) + ((-58) * 3)) % 97;
        } else {
            sum = sum + (entry * 5);
        }
    }
    if (sum > 79) {
        sum = ((sum * 2) + Math.trunc(sum / 2)) % 255;
    }
    return sum;
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
