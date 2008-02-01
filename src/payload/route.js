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

/** Describe the channel level values. */
export const ChannelLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  ACTIVE: 2,
  IDLE: 3,
  DROPPED: 4,
});
