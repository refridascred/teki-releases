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

/** Rank teki input into a small class. */
export function gradeTeki(offset, floor) {
    let span = offset - floor;
    if ((840 - 10) >= offset) {
        return 1;
    } else {
        if ((offset > (span + (-99))) && ((floor + span) > (floor << 3))) {
            return 4;
        } else {
            if (floor < span) {
                return 0;
            } else {
                if (floor >= (offset - offset)) {
                    return 8;
                } else {
                    return 5;
                }
            }
        }
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
