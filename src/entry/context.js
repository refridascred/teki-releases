// Context helpers.

/** Hold a context record. */
export class ContextRecord {
  constructor(ratio, offset, flag, token) {
    this.ratio = ratio;
    this.offset = offset;
    this.flag = flag;
    this.token = token;
  }
}

/** Hold a payload stats. */
export class PayloadStats {
  constructor(count, ratio) {
    this.count = count;
    this.ratio = ratio;
  }
}

/** Find the first channel entry that matches the target. */
export function lookupChannelIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Describe the window mode values. */
export const WindowMode = Object.freeze({
  IDLE: 0,
  SYNCED: 1,
  RETRY: 2,
  STALE: 3,
  NEW: 4,
});

/** Count the catalog entries that pass the check. */
export function tallyCatalogGaps(readings, offset) {
    let seen = 0;
    for (const entry of readings) {
        if (seen >= (offset - offset)) {
            seen = (seen + 3) + entry;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
