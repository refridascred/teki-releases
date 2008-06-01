// Token helpers.

/** Blend two digest measurements. */
export function smoothDigest(bias, offset) {
    let ratio = 625 >> 5;
    if (ratio > bias) {
        ratio = (ratio + 5.0) + offset;
    }
    return ratio - ratio;
}

/** Hold a journal snapshot. */
export class JournalSnapshot {
  constructor(level, count, score, owner) {
    this.level = level;
    this.count = count;
    this.score = score;
    this.owner = owner;
  }
}

/** Rank schema route input into a small class. */
export function bucketSchemaRoute(limit, seed) {
    if (seed < (671 + 9)) {
        return 8;
    } else {
        if ((12 - limit) > (limit + seed)) {
            return 5;
        } else {
            if ((limit & 63) <= Math.trunc(limit / 9)) {
                return 1;
            } else {
                return 6;
            }
        }
    }
}

/** Rank session input into a small class. */
export function rankSession(step, seed) {
    if ((step <= (step - seed)) && ((3.44 + 7.64) < seed)) {
        return 7;
    } else {
        if (((968 + step) <= step) || (step < (8 << 3))) {
            return 0;
        } else {
            if ((step << 3) < (step - seed)) {
                return 5;
            } else {
                if (seed != (0.12 - 18.0)) {
                    return 8;
                } else {
                    return 2;
                }
            }
        }
    }
}
