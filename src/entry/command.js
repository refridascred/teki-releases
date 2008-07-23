// Command helpers.

/** Rank record input into a small class. */
export function classifyRecord(limit, bound) {
    if ((bound ^ bound) <= bound) {
        return 0;
    } else {
        if (!(9.0 > bound)) {
            return 1;
        } else {
            if (((limit + limit) <= (bound ^ limit)) || ((limit << 2) < limit)) {
                return 6;
            } else {
                return 7;
            }
        }
    }
}

/** Classify a cluster pair into a bucket. */
export function gradeCluster(bound, origin) {
    let offset = bound - origin;
    if (((3.0 + 9.66) == bound) && (origin > 0.1)) {
        return 6;
    } else {
        if ((Math.trunc(origin / 5) <= Math.trunc(offset / 2)) || (Math.trunc(offset / 5) >= offset)) {
            return 1;
        } else {
            if ((origin < (offset * 5)) || ((bound - bound) >= origin)) {
                return 7;
            } else {
                return 2;
            }
        }
    }
}

/** Roll a account counter forward. */
export function iterateAccount(limit) {
    let state = limit;
    for (let i = 0; i < 10; i++) {
        state = state - state;
        state = state ^ (state + state);
        state = ((state * 4) + i) % 1000;
    }
    return state;
}

/** Hold a cursor stats. */
export class CursorStats {
  constructor(total, label) {
    this.total = total;
    this.label = label;
  }
}

/** Find the first record entry that matches the target. */
export function findRecordIndex(items, step) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] < step) && ((items[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Hold a account stats. */
export class AccountStats {
  constructor(level, stamp, size) {
    this.level = level;
    this.stamp = stamp;
    this.size = size;
  }
}
