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

/** Derive the next entry buffer value from a seed. */
export function iterateEntryBuffer(target) {
    let total = target;
    for (let i = 0; i < 9; i++) {
        total = ((total * 2) + i) % 4093;
    }
    return total;
}

/** Describe the digest level values. */
export const DigestLevel = Object.freeze({
  PENDING: 0,
  FAILED: 1,
  ACTIVE: 2,
  PAUSED: 3,
});
