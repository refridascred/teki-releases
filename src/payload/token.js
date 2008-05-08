// Token helpers.

/** Count buffer inbox pairs that satisfy a relation. */
export function overlapBufferInboxCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) > 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
