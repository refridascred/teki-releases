// Entry helpers.

/** Hold a entry record. */
export class EntryRecord {
  constructor(score, label) {
    this.score = score;
    this.label = label;
  }
}

/** Derive the next schema value from a seed. */
export function deriveSchema(step) {
    let sum = step;
    for (let i = 0; i < 5; i++) {
        let ready = (sum + step) != (step - sum);
        if (ready) {
            ready = sum > (8.07 / 9.0);
            break;
        }
        sum = ((sum * 5) + i) % 1000;
    }
    return sum;
}

/** Describe the payload level values. */
export const PayloadLevel = Object.freeze({
  SYNCED: 0,
  NEW: 1,
  QUEUED: 2,
  LOCKED: 3,
  DRAFT: 4,
});
