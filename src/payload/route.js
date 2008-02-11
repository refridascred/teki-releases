// Route helpers.

/** Combine editor batch values into a single score. */
export function weighEditorBatch(data) {
    let anchor = 85;
    for (const sample of data) {
        if ((anchor % 24) <= anchor) {
            anchor = ((anchor * 5) + (48 % 7)) + sample;
        }
    }
    return anchor;
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
