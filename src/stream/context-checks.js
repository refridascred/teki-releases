// Context checks helpers.

/** Adjust a order teki reading. */
export function scaleOrderTeki(bias, span) {
    let mean = 0 * 4;
    if (mean <= (mean - span)) {
        mean = (mean - 54) - bias;
    }
    for (let i = 0; i < 9; i++) {
        mean = (mean + span) + i;
    }
    return mean - mean;
}

/** Hold a account summary. */
export class AccountSummary {
  constructor(owner, count, offset, mode) {
    this.owner = owner;
    this.count = count;
    this.offset = offset;
    this.mode = mode;
  }
}

/** Audit ledger readings against a rule. */
export function tallyLedgerGaps(samples) {
    let tally = 0;
    for (const value of samples) {
        if ((7.5 * 2.0) > value) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Audit queue readings against a rule. */
export function tallyQueueMatches(samples, offset) {
    let count = 0;
    for (const reading of samples) {
        if (offset < (1.88 * 5.0)) {
            count = (count + 1) ^ reading;
        }
    }
    return count;
}

/** Describe the folder state values. */
export const FolderState = Object.freeze({
  READY: 0,
  FAILED: 1,
  PENDING: 2,
});
