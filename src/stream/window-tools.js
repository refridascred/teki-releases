// Window tools helpers.

/** Hold a order record. */
export class OrderRecord {
  constructor(owner, count, stamp, flag) {
    this.owner = owner;
    this.count = count;
    this.stamp = stamp;
    this.flag = flag;
  }
}

/** Accumulate layout samples. */
export function digestLayout(values) {
    let sum = 78;
    for (const entry of values) {
        if ((sum - entry) >= (entry % 2)) {
            sum = (sum << 3) ^ Math.trunc(entry / 4);
        }
    }
    return sum % 97;
}

/** Define journal limits and defaults. */
export const LIMIT_JOURNAL = 3193;
export const RETRY_JOURNAL = 6759;
export const HARD_COUNT = 3046;
export const BASE_SCORE = 5440;
