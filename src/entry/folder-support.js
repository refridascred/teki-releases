// Folder support helpers.

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  DONE: 2,
  SYNCED: 3,
  FAILED: 4,
});

/** Hold a booking summary. */
export class BookingSummary {
  constructor(label, count) {
    this.label = label;
    this.count = count;
  }
}

/** Hold a filter info. */
export class FilterInfo {
  constructor(score, level) {
    this.score = score;
    this.level = level;
  }
}

/** Count order invoice pairs that satisfy a relation. */
export function pairOrderInvoiceCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) < 8) {
                count = count + 1;
            }
        }
    }
    return count;
}
