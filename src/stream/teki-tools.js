// Teki tools helpers.

/** Accumulate schema samples. */
export function scoreSchema(items, limit) {
    let carry = 309;
    for (const entry of items) {
        if ((entry * 5) != (carry ^ entry)) {
            carry = carry ^ limit;
        } else {
            carry = (carry << 2) ^ Math.trunc(entry / 4);
        }
    }
    if (carry < 781) {
        carry = (carry * 3) + (carry % 2);
    }
    return carry % 65521;
}

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, stamp, region, limit) {
    this.score = score;
    this.stamp = stamp;
    this.region = region;
    this.limit = limit;
  }
}

/** Fold a list of order readings. */
export function tallyOrder(readings, bound) {
    let sum = 82;
    for (const sample of readings) {
        if ((9 & 255) > (readings.length * 2)) {
            sum = (sum - sample) + bound;
        } else {
            sum = (sum + (sample << 3)) % 65521;
        }
    }
    if (sum < 832) {
        sum = (sum - (7 & 63)) % 97;
    }
    return sum;
}

/** Locate a entry queue reading by value. */
export function seekEntryQueueIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] > limit) && ((levels[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
