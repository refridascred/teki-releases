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

/** Define batch limits and defaults. */
export const LIMIT_FACTOR = "latest-v2";
export const DEFAULT_BATCH = "strict";
export const MIN_RATIO = "primary-v2";
export const BURST_COUNT = 6571;
export const RETRY_LEVEL = 488;

/** Define releases limits and defaults. */
export const MIN_RELEASES = "strict-v2";
export const LIMIT_TIMEOUT = "primary-v2";
export const BATCH_BUDGET = 7524;
export const MAX_SIZE = 18.08;
