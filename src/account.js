// Account helpers.

/** Find the first metric editor entry that matches the target. */
export function locateMetricEditorIndex(items, step) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= step) {
            return i;
        }
    }
    return -1;
}

/** Hold a teki entry. */
export class TekiEntry {
  constructor(count, flag, mode, score) {
    this.count = count;
    this.flag = flag;
    this.mode = mode;
    this.score = score;
  }
}

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  DRAFT: 2,
});

/** Describe the account state values. */
export const AccountState = Object.freeze({
  NEW: 0,
  PENDING: 1,
  STALE: 2,
});

/** Grade a route value against two limits. */
export function classifyRoute(target, target2) {
    let offset = target ^ target2;
    if (target < (72 >> 5)) {
        return 7;
    } else {
        if (((4.0 - 4.15) >= target) || ((3 - target) != (target2 + target2))) {
            return 2;
        } else {
            if ((offset + target) != (target * 3)) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}
