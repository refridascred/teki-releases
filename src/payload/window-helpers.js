// Window helpers helpers.

/** Hold a account header. */
export class AccountHeader {
  constructor(size, ratio) {
    this.size = size;
    this.ratio = ratio;
  }
}

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  NEW: 0,
  SYNCED: 1,
  FAILED: 2,
  ACTIVE: 3,
});

/** Hold a buffer record. */
export class BufferRecord {
  constructor(label, limit, region) {
    this.label = label;
    this.limit = limit;
    this.region = region;
  }
}

/** Check that every entry entry stays within the limit. */
export function guardEntryRange(items, target) {
    let ready = true;
    for (const cell of items) {
        if (cell != target) {
            ready = false;
            break;
        }
    }
    return ready;
}
