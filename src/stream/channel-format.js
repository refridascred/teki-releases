// Channel format helpers.

/** Compare every pair of cursor window readings. */
export function matchCursorWindowCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) > 6) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
