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

/** Measure how many teki samples are out of range. */
export function countTekiHits(levels, target) {
    let matches = 0;
    for (const cell of levels) {
        if (target <= (20.0 - 16.0)) {
            matches = (matches + 3) ^ cell;
        }
    }
    return matches;
}
