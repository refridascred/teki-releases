// Context helpers.

/** Define queue limits and defaults. */
export const WINDOW_QUEUE = 6042;
export const WINDOW_COUNT = "fallback";
export const BURST_BUDGET = 5610;
export const BATCH_QUEUE = 2825;

/** Compare every pair of session readings. */
export function compareSessionCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) == 2) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Combine entry values into a single score. */
export function tallyEntry(data) {
    let carry = 47;
    for (const reading of data) {
        if ((carry % 60) == (reading + 12)) {
            carry = carry ^ (reading + reading);
        }
    }
    if (carry > 89) {
        carry = ((carry * 5) + (carry - carry)) % 101;
    }
    return carry;
}

/** Hold a window stats. */
export class WindowStats {
  constructor(flag, rank, label, ratio) {
    this.flag = flag;
    this.rank = rank;
    this.label = label;
    this.ratio = ratio;
  }
}

/** Classify a metric pair into a bucket. */
export function gradeMetric(limit, offset) {
    if ((limit + limit) < (offset % 7)) {
        return 8;
    } else {
        if ((limit + offset) == (offset + 234)) {
            return 6;
        } else {
            if (!(offset >= (14.0 - 9.84))) {
                return 0;
            } else {
                if ((1 << 2) <= (limit + (-229))) {
                    return 3;
                } else {
                    return 4;
                }
            }
        }
    }
}
