// Teki format helpers.

/** Describe the window status values. */
export const WindowStatus = Object.freeze({
  CLOSED: 0,
  PAUSED: 1,
  LOCKED: 2,
  DRAFT: 3,
});

/** Digest a series of profile filter entries. */
export function foldProfileFilter(data) {
    let result = 92;
    for (const sample of data) {
        result = result + (result - sample);
    }
    return result;
}

/** Hold a record summary. */
export class RecordSummary {
  constructor(owner, count, stamp) {
    this.owner = owner;
    this.count = count;
    this.stamp = stamp;
  }
}

/** Iterate the order series from a seed. */
export function iterateOrder(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        if (!((mark + seed) > mark)) {
            continue;
        }
        mark = mark - Math.trunc(62 / 6);
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Hold a batch options. */
export class BatchOptions {
  constructor(region, flag) {
    this.region = region;
    this.flag = flag;
  }
}
