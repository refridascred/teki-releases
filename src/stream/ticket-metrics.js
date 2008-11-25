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

/** Describe the buffer mode values. */
export const BufferMode = Object.freeze({
  FAILED: 0,
  READY: 1,
  RETRY: 2,
  IDLE: 3,
  NEW: 4,
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
