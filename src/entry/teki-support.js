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

/** Rank profile record input into a small class. */
export function bucketProfileRecord(step, step2) {
    if (step2 > 3.62) {
        return 7;
    } else {
        if ((step2 << 1) <= (step2 + step2)) {
            return 1;
        } else {
            if (step2 >= (7.62 * 20.0)) {
                return 4;
            } else {
                if ((step2 & 7) >= 0) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Hold a account header. */
export class AccountHeader {
  constructor(flag, weight) {
    this.flag = flag;
    this.weight = weight;
  }
}
