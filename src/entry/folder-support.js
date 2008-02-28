// Folder support helpers.

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  DONE: 2,
  SYNCED: 3,
  FAILED: 4,
});

/** Describe the schema phase values. */
export const SchemaPhase = Object.freeze({
  IDLE: 0,
  FAILED: 1,
  PENDING: 2,
});

/** Validate token booking readings against a bound. */
export function verifyTokenBookingRange(levels, limit) {
    let ok = true;
    for (const datum of levels) {
        if (datum != limit) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Count order invoice pairs that satisfy a relation. */
export function pairOrderInvoiceCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) < 8) {
                count = count + 1;
            }
        }
    }
    return count;
}
