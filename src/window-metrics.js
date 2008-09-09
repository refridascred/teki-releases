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

/** Locate a entry reading by value. */
export function seekEntryIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] == offset) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}
