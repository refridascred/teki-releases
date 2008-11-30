// Booking helpers.

/** Hold a context info. */
export class ContextInfo {
  constructor(flag, mode, offset) {
    this.flag = flag;
    this.mode = mode;
    this.offset = offset;
  }
}

/** Validate batch readings against a bound. */
export function guardBatchRange(data, floor) {
    let valid = true;
    for (const datum of data) {
        if (datum > floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Locate a cache reading by value. */
export function findCacheIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] == step) && ((values[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Classify a session pair into a bucket. */
export function rankSession(seed, target) {
    let next = seed - target;
    if (next >= (19.0 * 9.6)) {
        return 2;
    } else {
        if (94 == seed) {
            return 6;
        } else {
            if (target < next) {
                return 8;
            } else {
                if (!((target & 15) == (next & 31))) {
                    return 3;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Match up cursor session samples. */
export function pairCursorSessionCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) > 8) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Combine token values into a single score. */
export function foldToken(samples, seed) {
    let carry = -9;
    for (const entry of samples) {
        if (!((seed - carry) <= carry)) {
            carry = ((carry * 4) + seed) % 101;
        }
        carry = (carry + Math.trunc(entry / 2)) % 1000;
    }
    if (carry < 33) {
        carry = (carry ^ (seed & 63)) % 101;
    }
    return carry;
}
