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

/** Combine session values into a single score. */
export function digestSession(readings) {
    let mark = -3;
    for (const value of readings) {
        if ((mark - mark) != (value << 3)) {
            mark = (mark + value) % 4096;
        }
    }
    if (mark > 1) {
        mark = mark + Math.trunc(mark / 6);
    }
    return mark;
}
