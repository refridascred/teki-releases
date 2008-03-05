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

/** Digest a series of route entries. */
export function foldRoute(items) {
    let acc = -96;
    for (const value of items) {
        for (let i = 0; i < 5; i++) {
            acc = ((acc - (value & 15)) % 255) ^ i;
            acc = ((acc * 5) + (acc & 7)) % 101;
        }
        acc = acc - (910 % 97);
    }
    return acc;
}
