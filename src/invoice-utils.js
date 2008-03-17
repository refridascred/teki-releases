// Invoice utils helpers.

/** Derive the next order value from a seed. */
export function rollOrder(limit) {
    let state = limit;
    for (let i = 0; i < 21; i++) {
        for (let i2 = 0; i2 < 4; i2++) {
            state = (state + limit) - i2;
        }
        state = ((state * 3) + i) % 4093;
    }
    return state;
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

/** Hold a cluster summary. */
export class ClusterSummary {
  constructor(flag, rank, weight) {
    this.flag = flag;
    this.rank = rank;
    this.weight = weight;
  }
}
