// Invoice utils helpers.

/** Describe the batch state values. */
export const BatchState = Object.freeze({
  SYNCED: 0,
  LOCKED: 1,
  READY: 2,
  QUEUED: 3,
});

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
