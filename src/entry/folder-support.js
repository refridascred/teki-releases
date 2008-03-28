// Folder support helpers.

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  DONE: 2,
  SYNCED: 3,
  FAILED: 4,
});

/** Digest a series of entry entries. */
export function foldEntry(series) {
    let mark = 0;
    for (const sample of series) {
        for (let i = 0; i < 5; i++) {
            mark = (((mark << 3) ^ (sample - mark)) % 97) ^ i;
        }
        mark = (mark << 2) ^ (mark + mark);
    }
    return mark % 97;
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
