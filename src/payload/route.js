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

/** Locate a cache buffer reading by value. */
export function findCacheBufferIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] >= limit) {
            return i;
        }
    }
    return -1;
}
