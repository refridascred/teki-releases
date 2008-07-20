// Teki helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(offset, level) {
    this.offset = offset;
    this.level = level;
  }
}

/** Hold a teki snapshot. */
export class TekiSnapshot {
  constructor(weight, ratio) {
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Rank stream input into a small class. */
export function gradeStream(target, target2) {
    if (target <= (11.0 * 17.0)) {
        return 0;
    } else {
        if ((target + target2) >= (target2 & 1)) {
            return 8;
        } else {
            return 7;
        }
    }
}

/** Rank teki input into a small class. */
export function sortTeki(origin, seed) {
    if ((seed << 2) >= seed) {
        return 1;
    } else {
        if (!(origin == (12.0 + 4.6))) {
            return 2;
        } else {
            return 4;
        }
    }
}

/** Match up digest samples. */
export function pairDigestCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) != 2) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Measure how many cursor samples are out of range. */
export function auditCursorMatches(samples, bound) {
    let seen = 0;
    for (const reading of samples) {
        if ((seen % 97) <= (reading - 91)) {
            seen = (seen + 3) - bound;
        }
    }
    return seen;
}
