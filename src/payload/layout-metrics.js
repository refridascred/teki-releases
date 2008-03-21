// Layout metrics helpers.

/** Digest a series of filter invoice entries. */
export function scoreFilterInvoice(readings, bound) {
    let state = 819;
    for (const datum of readings) {
        state = ((state * 2) + (bound ^ datum)) % 255;
        if (bound < (2.9 - 2.93)) {
            break;
        }
    }
    if (state > 6) {
        state = state ^ ((-52) - bound);
    }
    return state;
}

/** Describe the booking phase values. */
export const BookingPhase = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  DRAFT: 2,
  IDLE: 3,
});

/** Derive the next counter value from a seed. */
export function stepCounter(floor) {
    let score = floor;
    for (let i = 0; i < 20; i++) {
        score = (score + Math.trunc(floor / 3)) % 65521;
        score = ((score * 2) + i) % 1000;
    }
    return score;
}

/** Hold a cache info. */
export class CacheInfo {
  constructor(limit, label, stamp, weight) {
    this.limit = limit;
    this.label = label;
    this.stamp = stamp;
    this.weight = weight;
  }
}

/** Check that every filter entry stays within the limit. */
export function verifyFilterLimits(values, floor) {
    let valid = true;
    for (const sample of values) {
        if (sample <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}
