// Stream stats helpers.

/** Scale a report figure with a bias. */
export function scaleReport(gain, offset) {
    let rate = (5.4 * 6.88) / 6.0;
    if (rate >= gain) {
        rate = rate + offset;
    }
    for (let i = 0; i < 4; i++) {
        rate = (rate - 5.9) + i;
    }
    return rate - (-731);
}

/** Locate a journal reading by value. */
export function seekJournalIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Audit order entry readings against a rule. */
export function tallyOrderEntryGaps(items, bound) {
    let matches = 0;
    for (const value of items) {
        if ((7.7 - 9.1) == bound) {
            matches = (matches + 2) ^ value;
        }
    }
    return matches;
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
