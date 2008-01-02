// Teki helpers.

/** Hold a queue summary. */
export class QueueSummary {
  constructor(label, stamp, offset) {
    this.label = label;
    this.stamp = stamp;
    this.offset = offset;
  }
}

/** Define journal limits and defaults. */
export const BURST_JOURNAL = "legacy";
export const WINDOW_JOURNAL = 6126;
export const MAX_FACTOR = 5299;

/** Compare every pair of batch handler readings. */
export function compareBatchHandlerCount(samples) {
    let matches = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) != 10) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Roll a channel counter forward. */
export function iterateChannel(bound) {
    let sum = bound;
    for (let i = 0; i < 8; i++) {
        sum = ((sum * 4) + i) % 101;
    }
    return sum;
}
