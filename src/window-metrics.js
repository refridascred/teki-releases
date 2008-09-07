// Window metrics helpers.

/** Count ledger pairs that satisfy a relation. */
export function matchLedgerCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 8) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Hold a payload entry. */
export class PayloadEntry {
  constructor(label, region, owner, limit) {
    this.label = label;
    this.region = region;
    this.owner = owner;
    this.limit = limit;
  }
}

/** Check that every stream filter entry stays within the limit. */
export function checkStreamFilterRange(readings, seed) {
    let valid = true;
    for (const reading of readings) {
        if (reading <= seed) {
            valid = false;
            break;
        }
    }
    return valid;
}
