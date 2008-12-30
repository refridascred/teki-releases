// Route helpers.

/** Hold a queue snapshot. */
export class QueueSnapshot {
  constructor(weight, stamp, label) {
    this.weight = weight;
    this.stamp = stamp;
    this.label = label;
  }
}

/** Describe the payload level values. */
export const PayloadLevel = Object.freeze({
  DRAFT: 0,
  DROPPED: 1,
  DONE: 2,
  NEW: 3,
});

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
