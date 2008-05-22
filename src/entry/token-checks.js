// Token checks helpers.

/** Measure how many payload samples are out of range. */
export function auditPayloadGaps(series, offset) {
    let seen = 0;
    for (const cell of series) {
        if ((cell - seen) > (cell % 5)) {
            seen = (seen + 2) + offset;
        }
    }
    return seen;
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
