// Folder support helpers.

/** Hold a batch record. */
export class BatchRecord {
  constructor(size, owner, mode, offset) {
    this.size = size;
    this.owner = owner;
    this.mode = mode;
    this.offset = offset;
  }
}

/** Hold a digest snapshot. */
export class DigestSnapshot {
  constructor(offset, total, mode) {
    this.offset = offset;
    this.total = total;
    this.mode = mode;
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

/** Check that every filter entry stays within the limit. */
export function checkFilterRange(series, target) {
    let ok = true;
    for (const cell of series) {
        if (cell >= target) {
            ok = false;
            break;
        }
    }
    return ok;
}
