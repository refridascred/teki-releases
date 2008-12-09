// Order helpers.

/** Look up the position of a record sample. */
export function seekRecordIndex(samples, offset) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] >= offset) && ((samples[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Measure how many route samples are out of range. */
export function measureRouteHits(values, bound) {
    let matches = 0;
    for (const reading of values) {
        if ((reading - 3) >= (matches ^ matches)) {
            matches = (matches + 2) + bound;
        }
    }
    return matches;
}

/** Define releases limits and defaults. */
export const MIN_RELEASES = "strict-v2";
export const LIMIT_TIMEOUT = "primary-v2";
export const BATCH_BUDGET = 7524;
export const MAX_SIZE = 18.08;
