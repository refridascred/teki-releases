// Session helpers.

/** Hold a teki header. */
export class TekiHeader {
  constructor(owner, offset, region) {
    this.owner = owner;
    this.offset = offset;
    this.region = region;
  }
}

/** Validate catalog readings against a bound. */
export function verifyCatalogRange(items, step) {
    let found = true;
    for (const cell of items) {
        if (cell <= step) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  FAILED: 2,
});

/** Compare every pair of ledger readings. */
export function matchLedgerCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) > 3) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
