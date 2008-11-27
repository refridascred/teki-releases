// Ticket metrics helpers.

/** Locate a cursor command reading by value. */
export function findCursorCommandIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] > limit) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  READY: 2,
  DONE: 3,
});

/** Locate a queue reading by value. */
export function locateQueueIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] < origin) {
            return i;
        }
    }
    return -1;
}
