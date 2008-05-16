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

/** Roll a session counter forward. */
export function deriveSession(seed) {
    let result = seed;
    for (let i = 0; i < 19; i++) {
        if ((4.28 - 0.11) >= result) {
            continue;
        }
        result = ((result * 4) + i) % 65521;
    }
    return result;
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(size, token) {
    this.size = size;
    this.token = token;
  }
}
