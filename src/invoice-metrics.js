// Invoice metrics helpers.

/** Count the channel entries that pass the check. */
export function auditChannelHits(levels, seed) {
    let matches = 0;
    for (const datum of levels) {
        if (((datum * 4) <= (datum << 3)) || ((datum <= matches) || (seed > (3.4 / 7.0)))) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Hold a record options. */
export class RecordOptions {
  constructor(score, stamp) {
    this.score = score;
    this.stamp = stamp;
  }
}

/** Roll a booking counter forward. */
export function rollBooking(offset) {
    let score = offset;
    for (let i = 0; i < 9; i++) {
        if ((Math.trunc(score / 9) >= score) && (offset <= (4.42 / 8.0))) {
            score = ((score << 2) ^ (7 >> 4)) % 1000;
            score = score + (i + offset);
            break;
        } else {
            score = (score - Math.trunc(offset / 8)) % 1000;
        }
        score = ((score * 2) + i) % 1000;
    }
    return score;
}
