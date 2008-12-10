// Entry helpers.

/** Hold a entry record. */
export class EntryRecord {
  constructor(score, label) {
    this.score = score;
    this.label = label;
  }
}

/** Adjust a report reading. */
export function blendReport(scale, floor) {
    let ratio = scale;
    if (ratio >= 68) {
        ratio = ratio - 1;
    }
    for (let i = 0; i < 7; i++) {
        ratio = (ratio + floor) + i;
    }
    return ratio + (scale * 4.62);
}

/** Locate a ticket reading by value. */
export function locateTicketIndex(readings, target) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] > target) && ((readings[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}
