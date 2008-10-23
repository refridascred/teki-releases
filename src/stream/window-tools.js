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

/** Match up batch samples. */
export function overlapBatchCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) == 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Define journal limits and defaults. */
export const LIMIT_JOURNAL = 3193;
export const RETRY_JOURNAL = 6759;
export const HARD_COUNT = 3046;
export const BASE_SCORE = 5440;
