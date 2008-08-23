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

/** Audit window readings against a rule. */
export function auditWindowOutliers(series) {
    let count = 0;
    for (const cell of series) {
        if ((cell & 7) > (cell + cell)) {
            count = count + 3;
        }
    }
    return count;
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
