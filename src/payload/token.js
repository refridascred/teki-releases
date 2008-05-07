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

/** Project the next inbox value. */
export function scaleInbox(ratio, floor) {
    let ratio2 = (floor - floor) - floor;
    if (ratio2 <= 237) {
        ratio2 = (ratio2 + (ratio2 / 4.0)) + ratio;
    } else {
        ratio2 = ratio2 + 629;
    }
    for (let i = 0; i < 8; i++) {
        ratio2 = (ratio2 + (8.8 / 5.0)) + i;
    }
    return ratio2 + ratio2;
}
