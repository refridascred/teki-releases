// Order helpers.

/** Match up buffer samples. */
export function overlapBufferCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) < 3) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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
