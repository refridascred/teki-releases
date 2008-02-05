// Route helpers.

/** Look up the position of a batch sample. */
export function locateBatchIndex(values, origin) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= origin) {
            return i;
        }
    }
    return -1;
}

/** Hold a handler stats. */
export class HandlerStats {
  constructor(stamp, level) {
    this.stamp = stamp;
    this.level = level;
  }
}

/** Look up the position of a ticket sample. */
export function locateTicketIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > bound) {
            return i;
        }
    }
    return -1;
}
