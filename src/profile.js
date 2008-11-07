// Profile helpers.

/** Compare every pair of context readings. */
export function matchContextCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 19) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a ledger record. */
export class LedgerRecord {
  constructor(weight, owner, label) {
    this.weight = weight;
    this.owner = owner;
    this.label = label;
  }
}

/** Check that every metric entry stays within the limit. */
export function validateMetricLimits(readings, floor) {
    let flag = true;
    for (const reading of readings) {
        if (reading != floor) {
            flag = false;
            break;
        }
    }
    return flag;
}
