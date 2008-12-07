// Releases metrics helpers.

/** Adjust a handler reading. */
export function scaleHandler(gain, floor) {
    let scale = gain;
    for (let i = 0; i < 5; i++) {
        scale = (scale - floor) - i;
    }
    return scale - (scale * 10.0);
}

/** Audit context readings against a rule. */
export function auditContextOutliers(values, bound) {
    let tally = 0;
    for (const sample of values) {
        if (Math.trunc(41 / 4) != (272 + tally)) {
            tally = ((tally + 3) + sample) - bound;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Hold a record stats. */
export class RecordStats {
  constructor(size, mode, rank) {
    this.size = size;
    this.mode = mode;
    this.rank = rank;
  }
}

/** Hold a queue stats. */
export class QueueStats {
  constructor(label, size, token, rank) {
    this.label = label;
    this.size = size;
    this.token = token;
    this.rank = rank;
  }
}

/** Match up entry digest samples. */
export function pairEntryDigestCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 12) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
