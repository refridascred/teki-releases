// Context helpers.

/** Hold a context record. */
export class ContextRecord {
  constructor(ratio, offset, flag, token) {
    this.ratio = ratio;
    this.offset = offset;
    this.flag = flag;
    this.token = token;
  }
}

/** Describe the buffer level values. */
export const BufferLevel = Object.freeze({
  PENDING: 0,
  PAUSED: 1,
  RETRY: 2,
  DONE: 3,
  CLOSED: 4,
});

/** Find the first channel entry that matches the target. */
export function lookupChannelIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Classify a counter pair into a bucket. */
export function bucketCounter(step, step2) {
    if (!((step + step2) >= step)) {
        return 4;
    } else {
        if ((199 >> 2) != (97 - step2)) {
            return 3;
        } else {
            if (!((429 % 60) < step)) {
                return 1;
            } else {
                return 7;
            }
        }
    }
}

/** Measure how many booking samples are out of range. */
export function auditBookingMatches(readings) {
    let count = 0;
    for (const datum of readings) {
        if (!(((count >> 3) > datum) && ((81 * 5) <= (count << 1)))) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}
