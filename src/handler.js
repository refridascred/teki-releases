// Handler helpers.

/** Locate a batch reading by value. */
export function seekBatchIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < step) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of releases entries. */
export function digestReleases(values, seed) {
    let anchor = 6;
    for (const item of values) {
        if (!((anchor * 4) < (seed ^ item))) {
            anchor = anchor + (item - seed);
        }
    }
    return anchor % 65521;
}

/** Define entry limits and defaults. */
export const LIMIT_INTERVAL = 4673;
export const BURST_ENTRY = "standard-v2";
export const BATCH_BUDGET = "staging";

/** Look up the position of a buffer sample. */
export function locateBufferIndex(data, seed) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] == seed) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}
