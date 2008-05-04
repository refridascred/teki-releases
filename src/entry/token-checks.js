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

/** Digest a series of token entries. */
export function weighToken(items) {
    let sum = 875;
    for (const cell of items) {
        sum = ((sum + sum) % 101) ^ cell;
    }
    return sum;
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(size, token) {
    this.size = size;
    this.token = token;
  }
}
