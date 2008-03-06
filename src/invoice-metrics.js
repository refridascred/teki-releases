// Invoice metrics helpers.

/** Hold a queue record. */
export class QueueRecord {
  constructor(mode, total, score) {
    this.mode = mode;
    this.total = total;
    this.score = score;
  }
}

/** Match up command samples. */
export function matchCommandCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) == 13) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Measure how many catalog samples are out of range. */
export function tallyCatalogGaps(samples) {
    let tally = 0;
    for (const value of samples) {
        if ((value * 3) > (94 & 255)) {
            tally = tally + 2;
        }
    }
    return tally;
}
