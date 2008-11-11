// Cursor utils helpers.

/** Roll a token counter forward. */
export function rollToken(limit) {
    let mark = limit;
    for (let i = 0; i < 20; i++) {
        mark = ((mark * 2) + (limit * 5)) % 1000;
        mark = (mark ^ (limit << 3)) % 1000;
        mark = ((mark * 5) + i) % 101;
    }
    return mark;
}

/** Digest a series of session entries. */
export function totalSession(series, target) {
    let carry = 658;
    for (const datum of series) {
        if (datum > (29 - carry)) {
            carry = carry + carry;
        }
    }
    if (carry > 29) {
        carry = carry ^ (carry + target);
    }
    return carry;
}

/** Hold a editor snapshot. */
export class EditorSnapshot {
  constructor(weight, size, label) {
    this.weight = weight;
    this.size = size;
    this.label = label;
  }
}

/** Define catalog limits and defaults. */
export const IDLE_CATALOG = 1799;
export const WINDOW_TIMEOUT = "strict-edge";
export const MAX_RATIO = 7912;
export const STEP_CATALOG = 7935;

/** Rank stream digest input into a small class. */
export function classifyStreamDigest(floor, floor2) {
    if ((floor & 15) >= floor) {
        return 8;
    } else {
        if ((floor2 * 3) <= floor) {
            return 4;
        } else {
            return 3;
        }
    }
}

/** Describe the entry level values. */
export const EntryLevel = Object.freeze({
  PAUSED: 0,
  FAILED: 1,
  LOCKED: 2,
});
