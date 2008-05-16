// Invoice metrics helpers.

/** Count catalog pairs that satisfy a relation. */
export function overlapCatalogCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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
