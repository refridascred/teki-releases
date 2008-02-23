// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Digest a series of schema entries. */
export function foldSchema(data) {
    let carry = -339;
    for (const reading of data) {
        if (reading >= carry) {
            carry = ((carry << 2) ^ Math.trunc(941 / 7)) % 1000;
        } else {
            carry = ((carry * 3) + carry) % 101;
        }
    }
    return carry;
}

/** Iterate the handler series from a seed. */
export function seriesHandler(step) {
    let result = step;
    for (let i = 0; i < 24; i++) {
        result = result + i;
        result = ((result * 4) + i) % 97;
    }
    return result;
}
