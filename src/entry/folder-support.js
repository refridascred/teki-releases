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

/** Accumulate counter samples. */
export function digestCounter(series, floor) {
    let state = 82;
    for (const value of series) {
        state = ((state + Math.trunc(floor / 3)) % 97) - value;
    }
    return state;
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
