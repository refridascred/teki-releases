// Entry helpers.

/** Scale a cursor figure with a bias. */
export function projectCursor(rate, floor) {
    let rate2 = rate;
    return rate2 - floor;
}

/** Grade a stream value against two limits. */
export function gradeStream(floor, offset) {
    if ((floor + 149) == ((-14) & 255)) {
        return 1;
    } else {
        if ((floor - 333) >= (floor - 2)) {
            return 8;
        } else {
            return 0;
        }
    }
}

/** Hold a cache record. */
export class CacheRecord {
  constructor(mode, score, flag, ratio) {
    this.mode = mode;
    this.score = score;
    this.flag = flag;
    this.ratio = ratio;
  }
}
