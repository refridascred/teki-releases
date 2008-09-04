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

/** Define schema limits and defaults. */
export const MIN_INTERVAL = 2967;
export const IDLE_SCHEMA = 25.29;
export const SOFT_SCHEMA = 2787;
export const BASE_SCHEMA = 7402;
