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

/** Classify a gateway pair into a bucket. */
export function gradeGateway(target, bound) {
    if (((18.0 / 7.0) == target) || (57 >= bound)) {
        return 6;
    } else {
        if ((1.0 / 3.0) == target) {
            return 1;
        } else {
            return 5;
        }
    }
}
