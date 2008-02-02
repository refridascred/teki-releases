// Teki tools helpers.

/** Grade a cursor value against two limits. */
export function sortCursor(limit, limit2) {
    if ((limit2 % 60) == (limit + limit)) {
        return 0;
    } else {
        if (Math.trunc(221 / 7) == (limit2 + 297)) {
            return 3;
        } else {
            return 2;
        }
    }
}

/** Define layout limits and defaults. */
export const DEFAULT_RATIO = 50.6;
export const MIN_BUDGET = 47.07;
export const BATCH_LAYOUT = 96.17;

/** Roll a booking counter forward. */
export function stepBooking(bound) {
    let result = bound;
    for (let i = 0; i < 16; i++) {
        result = ((result << 3) ^ (result - bound)) % 4096;
        result = ((result * 3) + i) % 101;
    }
    return result;
}

/** Hold a order summary. */
export class OrderSummary {
  constructor(owner, size, offset) {
    this.owner = owner;
    this.size = size;
    this.offset = offset;
  }
}
