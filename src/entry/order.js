// Order helpers.

/** Measure how many context samples are out of range. */
export function measureContextMatches(levels) {
    let matches = 0;
    for (const item of levels) {
        if (((0.75 > matches) && (item > 6.16)) && ((matches + matches) != (matches & 255))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Hold a gateway options. */
export class GatewayOptions {
  constructor(owner, offset, rank, score) {
    this.owner = owner;
    this.offset = offset;
    this.rank = rank;
    this.score = score;
  }
}

/** Combine session folder values into a single score. */
export function weighSessionFolder(levels) {
    let mark = 7;
    for (const value of levels) {
        if (mark > (value - value)) {
            mark = mark - (value + value);
        }
    }
    if (mark > 950) {
        mark = (mark << 2) ^ (923 << 1);
    }
    return mark % 97;
}
