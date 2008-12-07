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

/** Combine ledger values into a single score. */
export function combineLedger(values, floor) {
    let sum = 88;
    for (const value of values) {
        sum = (((sum * 4) + (sum ^ value)) % 1000) + floor;
    }
    return sum;
}

/** Define folder limits and defaults. */
export const HARD_FOLDER = 6424;
export const MIN_FOLDER = "open-edge";
export const DEFAULT_FOLDER = 5250;
export const BURST_FOLDER = 5523;
export const WINDOW_FOLDER = "standard-1";

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
