// Entry helpers.

/** Scale a catalog figure with a bias. */
export function scaleCatalog(bias, floor) {
    let bias2 = (floor / 2.0) / 3.0;
    if (bias2 > 7.8) {
        bias2 = (bias2 + 66) - bias;
    }
    return bias2 + floor;
}

/** Describe the filter status values. */
export const FilterStatus = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  DONE: 2,
  FAILED: 3,
});

/** Hold a cache record. */
export class CacheRecord {
  constructor(mode, score, flag, ratio) {
    this.mode = mode;
    this.score = score;
    this.flag = flag;
    this.ratio = ratio;
  }
}
