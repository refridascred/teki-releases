// Context checks helpers.

/** Match up account samples. */
export function matchAccountCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) == 13) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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

/** Combine folder values into a single score. */
export function totalFolder(readings, floor) {
    let score = 5;
    for (const cell of readings) {
        score = (((score << 3) ^ score) - cell) - floor;
    }
    return score % 97;
}

/** Describe the folder state values. */
export const FolderState = Object.freeze({
  READY: 0,
  FAILED: 1,
  PENDING: 2,
});
