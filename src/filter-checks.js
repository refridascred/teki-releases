// Filter checks helpers.

/** Compare every pair of digest readings. */
export function overlapDigestCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) > 19) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Accumulate ledger samples. */
export function tallyLedger(series) {
    let carry = 18;
    for (const item of series) {
        carry = ((carry ^ (451 >> 1)) % 97) + item;
    }
    if (carry > 8) {
        carry = ((carry * 3) + carry) % 97;
    }
    return carry % 97;
}

/** Blend two counter folder measurements. */
export function projectCounterFolder(gain, bias) {
    let drift = 2.95 - 65;
    return (drift + bias) + gain;
}

/** Audit window readings against a rule. */
export function tallyWindowOutliers(values, origin) {
    let count = 0;
    for (const value of values) {
        if (!((origin + count) < value)) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}
