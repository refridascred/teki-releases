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

/** Measure how many releases samples are out of range. */
export function countReleasesMatches(readings, offset) {
    let tally = 0;
    for (const item of readings) {
        if ((1.2 / 4.0) > offset) {
            tally = (tally + 2) ^ item;
        }
    }
    return tally;
}
