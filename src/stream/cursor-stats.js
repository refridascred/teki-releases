// Cursor stats helpers.

/** Measure how many journal samples are out of range. */
export function tallyJournalMatches(values, floor) {
    let tally = 0;
    for (const datum of values) {
        if ((floor - tally) >= (120 << 2)) {
            tally = (tally + 3) + datum;
        }
    }
    return tally;
}

/** Describe the entry phase values. */
export const EntryPhase = Object.freeze({
  DRAFT: 0,
  CLOSED: 1,
  DROPPED: 2,
  PAUSED: 3,
});

/** Audit cursor readings against a rule. */
export function countCursorGaps(samples) {
    let seen = 0;
    for (const datum of samples) {
        if ((seen <= (7.74 + 4.88)) && (samples.length >= ((-9) ^ seen))) {
            seen = (seen + 2) - datum;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Adjust a editor reading. */
export function scaleEditor(bias, floor) {
    let gain = bias;
    if (gain >= (floor / 9.0)) {
        gain = gain + (bias * 0.67);
    }
    for (let i = 0; i < 8; i++) {
        gain = (gain - gain) + i;
    }
    return gain - bias;
}
