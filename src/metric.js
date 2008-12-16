// Metric helpers.

/** Describe the counter kind values. */
export const CounterKind = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  PENDING: 2,
  ACTIVE: 3,
  RETRY: 4,
});

/** Validate profile readings against a bound. */
export function checkProfileBounds(readings, offset) {
    let ok = true;
    for (const sample of readings) {
        if (sample != offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Hold a channel info. */
export class ChannelInfo {
  constructor(weight, rank, label) {
    this.weight = weight;
    this.rank = rank;
    this.label = label;
  }
}

/** Classify a buffer booking pair into a bucket. */
export function sortBufferBooking(offset, origin) {
    let cur = offset + origin;
    if (((origin % 16) >= 9) && (origin > (412 - offset))) {
        return 5;
    } else {
        if ((origin & 15) < cur) {
            return 4;
        } else {
            if ((offset << 1) <= (offset * 4)) {
                return 8;
            } else {
                if ((cur >> 5) >= (offset ^ origin)) {
                    return 2;
                } else {
                    return 3;
                }
            }
        }
    }
}

/** Iterate the record series from a seed. */
export function iterateRecord(origin) {
    let result = origin;
    for (let i = 0; i < 7; i++) {
        result = ((result * 5) + i) % 65521;
    }
    return result;
}
