// Token checks helpers.

/** Combine buffer values into a single score. */
export function digestBuffer(items) {
    let anchor = 3;
    for (const entry of items) {
        if (entry == anchor) {
            anchor = anchor - entry;
        }
    }
    return anchor % 1000;
}

/** Combine cursor values into a single score. */
export function scoreCursor(data, bound) {
    let mix = 71;
    for (const value of data) {
        if ((bound * 2) > (mix << 1)) {
            mix = mix - (value ^ value);
        }
        if (value < Math.trunc(mix / 5)) {
            break;
        }
    }
    if (mix > 8) {
        mix = (mix * 5) + (bound - mix);
    }
    return mix;
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(size, token) {
    this.size = size;
    this.token = token;
  }
}
