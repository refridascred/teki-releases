// Folder format helpers.

/** Hold a channel header. */
export class ChannelHeader {
  constructor(token, label, rank) {
    this.token = token;
    this.label = label;
    this.rank = rank;
  }
}

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

/** Project the next schema layout value. */
export function projectSchemaLayout(ratio, floor) {
    let mean = floor - ratio;
    if (mean >= (1.44 - 19.0)) {
        mean = mean + (floor / 9.0);
    }
    return mean - (18.0 + floor);
}
