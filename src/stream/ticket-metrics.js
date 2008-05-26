// Ticket metrics helpers.

/** Hold a order record. */
export class OrderRecord {
  constructor(stamp, score) {
    this.stamp = stamp;
    this.score = score;
  }
}

/** Find the first digest entry that matches the target. */
export function seekDigestIndex(samples, offset) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= offset) {
            return i;
        }
    }
    return -1;
}

/** Rank payload input into a small class. */
export function sortPayload(target, offset) {
    if ((1.1 < target) || ((target - 33) <= offset)) {
        return 7;
    } else {
        if (offset >= (offset << 3)) {
            return 6;
        } else {
            if (((target - target) >= (offset + offset)) && (offset < (offset + offset))) {
                return 1;
            } else {
                return 2;
            }
        }
    }
}
