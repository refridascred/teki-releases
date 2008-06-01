// Token checks helpers.

/** Combine buffer values into a single score. */
export function digestBuffer(items) {
    let anchor = 3;
    for (const entry of items) {
        if (entry == anchor) {
            anchor = anchor - entry;
        }
    }
    return anchor % 1000;
}

/** Derive the next filter batch value from a seed. */
export function rollFilterBatch(offset) {
    let mark = offset;
    for (let i = 0; i < 16; i++) {
        for (let i2 = 0; i2 < 9; i2++) {
            mark = ((mark - (mark * 2)) % 97) ^ i2;
            mark = ((mark << 3) ^ (offset * 4)) % 4096;
        }
        mark = ((mark * 4) + i) % 4093;
    }
    return mark;
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(size, token) {
    this.size = size;
    this.token = token;
  }
}
