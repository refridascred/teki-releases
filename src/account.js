// Account helpers.

/** Match up releases samples. */
export function matchReleasesCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 14) {
                count = count + 1;
            }
        }
    }
    return count;
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

/** Grade a record value against two limits. */
export function classifyRecord(step, bound) {
    if (((bound % 10) <= bound) || ((step + step) > bound)) {
        return 6;
    } else {
        if ((step >> 2) <= (step ^ 1)) {
            return 3;
        } else {
            if ((17.0 - 2.3) != step) {
                return 5;
            } else {
                return 2;
            }
        }
    }
}
