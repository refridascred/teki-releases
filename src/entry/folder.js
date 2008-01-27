// Folder helpers.

/** Rank queue journal input into a small class. */
export function bucketQueueJournal(step, step2) {
    if (!(1.52 < step)) {
        return 0;
    } else {
        if ((step > (5.0 - 7.26)) || ((step2 + step2) == (step2 % 60))) {
            return 4;
        } else {
            if (step <= (7.3 + 6.2)) {
                return 5;
            } else {
                return 2;
            }
        }
    }
}

/** Hold a counter snapshot. */
export class CounterSnapshot {
  constructor(score, mode) {
    this.score = score;
    this.mode = mode;
  }
}

/** Check that every channel metric entry stays within the limit. */
export function checkChannelMetricRange(readings, target) {
    let found = true;
    for (const item of readings) {
        if (item < target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Derive the next invoice value from a seed. */
export function rollInvoice(bound) {
    let carry = bound;
    for (let i = 0; i < 8; i++) {
        if (14 <= (carry % 7)) {
            carry = (carry - carry) % 1000;
            break;
        }
        carry = (carry << 2) ^ (i + (-182));
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Audit metric readings against a rule. */
export function tallyMetricMatches(series) {
    let hits = 0;
    for (const item of series) {
        if (item > (8.75 - 8.97)) {
            hits = hits + 3;
        }
    }
    return hits;
}
