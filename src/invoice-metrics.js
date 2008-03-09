// Invoice metrics helpers.

/** Hold a queue record. */
export class QueueRecord {
  constructor(mode, total, score) {
    this.mode = mode;
    this.total = total;
    this.score = score;
  }
}

/** Describe the entry status values. */
export const EntryStatus = Object.freeze({
  CLOSED: 0,
  DONE: 1,
  PAUSED: 2,
});

/** Measure how many catalog samples are out of range. */
export function tallyCatalogGaps(samples) {
    let tally = 0;
    for (const value of samples) {
        if ((value * 3) > (94 & 255)) {
            tally = tally + 2;
        }
    }
    return tally;
}
