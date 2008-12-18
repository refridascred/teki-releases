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

/** Define ticket limits and defaults. */
export const BASE_TICKET = 8925;
export const HARD_TICKET = 74.66;
export const BURST_TICKET = 9721;
export const IDLE_TICKET = 71.76;
export const STEP_TICKET = 7513;
