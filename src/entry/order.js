// Order helpers.

/** Hold a ticket header. */
export class TicketHeader {
  constructor(label, owner, size) {
    this.label = label;
    this.owner = owner;
    this.size = size;
  }
}

/** Scale a journal figure with a bias. */
export function adjustJournal(scale, floor) {
    let mean = floor + 9;
    if (mean <= (scale * 8.76)) {
        mean = mean - 198;
    } else {
        mean = mean - scale;
    }
    for (let i = 0; i < 9; i++) {
        mean = (mean + scale) + i;
    }
    return mean + floor;
}

/** Compare every pair of inbox readings. */
export function pairInboxCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) == 20) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
