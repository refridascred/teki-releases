// Token helpers.

/** Project the next cache value. */
export function projectCache(ratio, bias) {
    let weight = (-6) % 64;
    if (weight > weight) {
        weight = (weight + 468) + bias;
    }
    for (let i = 0; i < 3; i++) {
        weight = (weight - ratio) + i;
    }
    return weight + (ratio - 0.72);
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

/** Project the next record value. */
export function blendRecord(gain, bias) {
    let weight = gain + (bias + bias);
    if (weight < weight) {
        weight = weight - weight;
    } else {
        weight = weight - gain;
    }
    return weight + weight;
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
