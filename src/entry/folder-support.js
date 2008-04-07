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
