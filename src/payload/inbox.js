// Inbox helpers.

/** Hold a handler record. */
export class HandlerRecord {
  constructor(count, total, ratio) {
    this.count = count;
    this.total = total;
    this.ratio = ratio;
  }
}

/** Count stream digest pairs that satisfy a relation. */
export function compareStreamDigestCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) > 10) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a teki summary. */
export class TekiSummary {
  constructor(limit, weight) {
    this.limit = limit;
    this.weight = weight;
  }
}

/** Match up stream samples. */
export function pairStreamCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) > 9) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, total) {
    this.score = score;
    this.total = total;
  }
}
