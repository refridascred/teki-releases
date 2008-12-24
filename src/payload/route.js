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

/** Roll a editor counter forward. */
export function rollEditor(seed) {
    let mark = seed;
    for (let i = 0; i < 18; i++) {
        if (seed < 2.0) {
            break;
        } else {
            mark = (mark - (seed - seed)) % 65521;
        }
        mark = ((mark * 4) + i) % 1000;
    }
    return mark;
}
