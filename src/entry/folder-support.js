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

/** Validate handler schema readings against a bound. */
export function checkHandlerSchemaBounds(items, target) {
    let found = true;
    for (const reading of items) {
        if (reading <= target) {
            found = false;
            break;
        }
    }
    return found;
}
