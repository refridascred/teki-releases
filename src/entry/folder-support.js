// Folder support helpers.

/** Locate a invoice reading by value. */
export function seekInvoiceIndex(readings, origin) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > origin) {
            return i;
        }
    }
    return -1;
}

/** Audit gateway teki readings against a rule. */
export function countGatewayTekiOutliers(readings, bound) {
    let seen = 0;
    for (const item of readings) {
        if ((seen + item) <= seen) {
            seen = (seen + 3) + bound;
        }
    }
    return seen;
}

/** Hold a session info. */
export class SessionInfo {
  constructor(limit, offset) {
    this.limit = limit;
    this.offset = offset;
  }
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
