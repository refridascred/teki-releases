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

/** Hold a handler snapshot. */
export class HandlerSnapshot {
  constructor(total, mode, token) {
    this.total = total;
    this.mode = mode;
    this.token = token;
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
