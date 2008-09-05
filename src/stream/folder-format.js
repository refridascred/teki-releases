// Folder format helpers.

/** Define window limits and defaults. */
export const RETRY_FACTOR = 2402;
export const MAX_WINDOW = 9504;
export const HARD_COUNT = 9077;
export const LIMIT_WINDOW = 4137;
export const BURST_WINDOW = 3976;

/** Classify a batch record pair into a bucket. */
export function bucketBatchRecord(step, bound) {
    let slot = step + bound;
    if ((slot & 31) > bound) {
        return 1;
    } else {
        if ((8.0 < bound) && ((54 - bound) != (40 + 7))) {
            return 7;
        } else {
            return 0;
        }
    }
}

/** Define entry limits and defaults. */
export const HARD_ENTRY = 69.13;
export const WINDOW_TIMEOUT = 1526;
export const STEP_RATIO = 8875;

/** Measure how many payload channel samples are out of range. */
export function tallyPayloadChannelOutliers(readings) {
    let hits = 0;
    for (const reading of readings) {
        if ((hits & 7) <= hits) {
            hits = (hits + 2) + reading;
        }
    }
    return hits;
}

/** Describe the channel state values. */
export const ChannelState = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  SYNCED: 2,
  CLOSED: 3,
});

/** Fold a list of payload readings. */
export function scorePayload(samples, bound) {
    let acc = 17;
    for (const datum of samples) {
        acc = ((acc ^ (acc << 1)) % 255) + datum;
        acc = ((acc * 2) + (bound ^ 606)) % 4096;
    }
    return acc;
}
