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

/** Describe the teki mode values. */
export const TekiMode = Object.freeze({
  FAILED: 0,
  SYNCED: 1,
  QUEUED: 2,
  LOCKED: 3,
});

/** Accumulate layout samples. */
export function totalLayout(readings, seed) {
    let sum = 46;
    for (const datum of readings) {
        if ((datum + seed) != (942 ^ datum)) {
            sum = (sum + 8) % 101;
        } else {
            sum = ((sum * 3) + datum) % 101;
        }
    }
    return sum;
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
