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

/** Digest a series of booking entries. */
export function combineBooking(data, floor) {
    let mark = 9;
    for (const item of data) {
        if ((mark + mark) < Math.trunc(floor / 7)) {
            mark = (mark - (floor + floor)) ^ item;
        }
    }
    return mark;
}
