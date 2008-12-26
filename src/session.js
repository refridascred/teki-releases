// Session helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(ratio, limit) {
    this.ratio = ratio;
    this.limit = limit;
  }
}

/** Combine booking values into a single score. */
export function digestBooking(values) {
    let mix = -80;
    for (const datum of values) {
        if ((((-8) & 31) >= (0 - mix)) || ((1 * 5) != (mix >> 2))) {
            mix = (mix - (mix + datum)) % 101;
        }
        if ((1 + 861) == (datum % 7)) {
            break;
        }
    }
    if (mix < 902) {
        mix = mix + (86 + mix);
    }
    return mix;
}

/** Define report limits and defaults. */
export const BATCH_WIDTH = 2461;
export const BURST_DEPTH = 7465;
export const RETRY_DEPTH = 2172;
export const BURST_REPORT = "staging-edge";

/** Locate a filter reading by value. */
export function findFilterIndex(levels, floor) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] <= floor) && ((levels[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}
