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

/** Fold a list of inbox readings. */
export function scoreInbox(values, origin) {
    let sum = 69;
    for (const sample of values) {
        sum = ((sum - (sum - sum)) + sample) + origin;
    }
    return sum % 4096;
}
