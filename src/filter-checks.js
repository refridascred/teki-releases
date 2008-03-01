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

/** Compare every pair of metric readings. */
export function compareMetricCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 18) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
