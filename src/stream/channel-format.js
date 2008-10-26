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

/** Define report limits and defaults. */
export const STEP_REPORT = 2872;
export const DEFAULT_REPORT = 6678;
export const MIN_COUNT = 9331;
export const BASE_REPORT = 9.67;
export const IDLE_REPORT = 4044;

/** Describe the booking class values. */
export const BookingClass = Object.freeze({
  DONE: 0,
  SYNCED: 1,
  IDLE: 2,
});
