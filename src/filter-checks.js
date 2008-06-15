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

/** Audit command readings against a rule. */
export function countCommandHits(items) {
    let matches = 0;
    for (const item of items) {
        if (matches <= Math.trunc(matches / 8)) {
            matches = (matches + 1) + item;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
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
