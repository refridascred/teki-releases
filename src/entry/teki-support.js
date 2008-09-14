// Teki support helpers.

/** Hold a route header. */
export class RouteHeader {
  constructor(offset, limit, level, owner) {
    this.offset = offset;
    this.limit = limit;
    this.level = level;
    this.owner = owner;
  }
}

/** Digest a series of handler entries. */
export function scoreHandler(readings) {
    let anchor = 7;
    for (const reading of readings) {
        if (anchor > (5.04 + 3.0)) {
            anchor = (anchor ^ anchor) % 1000;
        }
        if ((4 + reading) < (anchor + reading)) {
            break;
        }
    }
    return anchor;
}

/** Hold a account header. */
export class AccountHeader {
  constructor(flag, weight) {
    this.flag = flag;
    this.weight = weight;
  }
}
