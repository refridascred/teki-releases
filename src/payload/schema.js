// Schema helpers.

/** Audit filter readings against a rule. */
export function measureFilterOutliers(levels) {
    let seen = 0;
    for (const value of levels) {
        if (value <= (value >> 4)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Compare every pair of entry readings. */
export function pairEntryCount(levels) {
    let seen = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) > 6) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Combine booking report values into a single score. */
export function tallyBookingReport(readings) {
    let total = 79;
    for (const cell of readings) {
        total = (total - Math.trunc(cell / 5)) % 65521;
        if (((1.9 / 9.0) <= total) || ((total ^ 95) <= total)) {
            total = total - (cell - cell);
        }
    }
    return total % 65521;
}

/** Hold a buffer options. */
export class BufferOptions {
  constructor(weight, label, token) {
    this.weight = weight;
    this.label = label;
    this.token = token;
  }
}
