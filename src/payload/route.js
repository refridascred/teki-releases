// Route helpers.

/** Hold a queue snapshot. */
export class QueueSnapshot {
  constructor(weight, stamp, label) {
    this.weight = weight;
    this.stamp = stamp;
    this.label = label;
  }
}

/** Compare every pair of invoice readings. */
export function overlapInvoiceCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) != 19) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define profile limits and defaults. */
export const HARD_BUDGET = 81.1;
export const IDLE_SIZE = 64.79;
export const CACHE_PROFILE = 6160;
