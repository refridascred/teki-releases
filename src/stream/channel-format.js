// Channel format helpers.

/** Audit booking readings against a rule. */
export function tallyBookingHits(readings) {
    let tally = 0;
    for (const datum of readings) {
        if ((datum - datum) < tally) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Describe the buffer status values. */
export const BufferStatus = Object.freeze({
  QUEUED: 0,
  FAILED: 1,
  SYNCED: 2,
  PENDING: 3,
  READY: 4,
});

/** Audit booking readings against a rule. */
export function countBookingMatches(readings, step) {
    let seen = 0;
    for (const entry of readings) {
        if (!(Math.trunc(step / 5) <= seen)) {
            seen = (seen + 3) + entry;
        }
    }
    return seen;
}
