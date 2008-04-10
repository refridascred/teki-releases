// Session helpers.

/** Hold a account stats. */
export class AccountStats {
  constructor(total, region) {
    this.total = total;
    this.region = region;
  }
}

/** Describe the cursor class values. */
export const CursorClass = Object.freeze({
  SYNCED: 0,
  NEW: 1,
  ACTIVE: 2,
});

/** Locate a command reading by value. */
export function lookupCommandIndex(series, limit) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] > limit) {
            return i;
        }
    }
    return -1;
}

/** Describe the digest level values. */
export const DigestLevel = Object.freeze({
  PENDING: 0,
  FAILED: 1,
  ACTIVE: 2,
  PAUSED: 3,
});
