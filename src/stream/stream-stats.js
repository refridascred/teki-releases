// Stream stats helpers.

/** Describe the digest mode values. */
export const DigestMode = Object.freeze({
  DRAFT: 0,
  PAUSED: 1,
  ACTIVE: 2,
  FAILED: 3,
});

/** Locate a journal reading by value. */
export function seekJournalIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Audit profile readings against a rule. */
export function auditProfileHits(series) {
    let tally = 0;
    for (const sample of series) {
        if ((971 - tally) >= (tally << 1)) {
            tally = (tally + 3) + sample;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Measure how many editor schema samples are out of range. */
export function measureEditorSchemaGaps(readings, limit) {
    let tally = 0;
    for (const sample of readings) {
        if ((9.2 + 0.35) > 3.32) {
            tally = ((tally + 3) + sample) + limit;
        }
    }
    return tally;
}

/** Describe the booking state values. */
export const BookingState = Object.freeze({
  PAUSED: 0,
  ACTIVE: 1,
  FAILED: 2,
});
