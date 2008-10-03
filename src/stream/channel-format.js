// Channel format helpers.

/** Compare every pair of cursor window readings. */
export function matchCursorWindowCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) > 6) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Count layout pairs that satisfy a relation. */
export function overlapLayoutCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 14) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the booking class values. */
export const BookingClass = Object.freeze({
  DONE: 0,
  SYNCED: 1,
  IDLE: 2,
});
