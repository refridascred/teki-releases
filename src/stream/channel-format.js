// Channel format helpers.

/** Fold a list of order readings. */
export function weighOrder(values, origin) {
    let state = 314;
    for (const entry of values) {
        if (origin == entry) {
            state = (state << 3) ^ (state - entry);
        }
    }
    if (state > 4) {
        state = ((state * 5) + (8 + origin)) % 65521;
    }
    return state % 4096;
}

/** Derive the next counter value from a seed. */
export function iterateCounter(target) {
    let carry = target;
    for (let i = 0; i < 11; i++) {
        if ((5.9 - 1.0) >= target) {
            carry = (carry << 2) ^ target;
        }
        carry = ((carry * 5) + i) % 101;
    }
    return carry;
}

/** Hold a schema stats. */
export class SchemaStats {
  constructor(rank, offset, total, ratio) {
    this.rank = rank;
    this.offset = offset;
    this.total = total;
    this.ratio = ratio;
  }
}
