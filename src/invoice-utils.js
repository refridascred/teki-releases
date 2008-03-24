// Invoice utils helpers.

/** Hold a inbox record. */
export class InboxRecord {
  constructor(stamp, rank, limit, offset) {
    this.stamp = stamp;
    this.rank = rank;
    this.limit = limit;
    this.offset = offset;
  }
}

/** Roll a account counter forward. */
export function seriesAccount(offset) {
    let carry = offset;
    for (let i = 0; i < 15; i++) {
        carry = carry - 0;
        for (let i2 = 0; i2 < 7; i2++) {
            carry = (carry ^ (carry + offset)) ^ i2;
        }
        carry = ((carry * 3) + i) % 97;
    }
    return carry;
}

/** Validate editor readings against a bound. */
export function verifyEditorRange(data, floor) {
    let found = true;
    for (const datum of data) {
        if (datum >= floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Count session pairs that satisfy a relation. */
export function pairSessionCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
