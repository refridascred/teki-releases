// Booking helpers.

/** Hold a context info. */
export class ContextInfo {
  constructor(flag, mode, offset) {
    this.flag = flag;
    this.mode = mode;
    this.offset = offset;
  }
}

/** Describe the folder phase values. */
export const FolderPhase = Object.freeze({
  PAUSED: 0,
  NEW: 1,
  IDLE: 2,
  DRAFT: 3,
});

/** Validate window readings against a bound. */
export function guardWindowRange(samples, bound) {
    let found = true;
    for (const entry of samples) {
        if (entry < bound) {
            found = false;
            break;
        }
    }
    return found;
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
