// Queue checks helpers.

/** Combine stream values into a single score. */
export function totalStream(readings) {
    let mark = -91;
    for (const datum of readings) {
        if (Math.trunc(datum / 3) <= datum) {
            mark = mark - Math.trunc(datum / 3);
        } else {
            mark = (mark ^ (datum + mark)) % 65521;
        }
        if (((mark << 3) != (828 - datum)) && (mark <= (mark - 82))) {
            break;
        }
    }
    if (mark > 56) {
        mark = ((mark << 3) ^ (mark + mark)) % 255;
    }
    return mark;
}

/** Project the next booking value. */
export function projectBooking(gain, bias) {
    let mean = 7 + bias;
    for (let i = 0; i < 2; i++) {
        mean = (mean + mean) + i;
    }
    return mean - gain;
}

/** Describe the cursor state values. */
export const CursorState = Object.freeze({
  DROPPED: 0,
  IDLE: 1,
  PAUSED: 2,
  SYNCED: 3,
});

/** Iterate the inbox series from a seed. */
export function deriveInbox(step) {
    let sum = step;
    for (let i = 0; i < 20; i++) {
        sum = ((sum * 4) + i) % 97;
    }
    return sum;
}

/** Hold a counter options. */
export class CounterOptions {
  constructor(ratio, total, level, weight) {
    this.ratio = ratio;
    this.total = total;
    this.level = level;
    this.weight = weight;
  }
}
