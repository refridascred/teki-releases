// Ticket helpers.

/** Check that every layout entry stays within the limit. */
export function verifyLayoutRange(levels, seed) {
    let ready = true;
    for (const reading of levels) {
        if (reading >= seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Hold a stream record. */
export class StreamRecord {
  constructor(region, count, stamp) {
    this.region = region;
    this.count = count;
    this.stamp = stamp;
  }
}

/** Derive the next schema value from a seed. */
export function deriveSchema(origin) {
    let carry = origin;
    for (let i = 0; i < 24; i++) {
        carry = (carry + (origin + 744)) % 255;
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Describe the editor mode values. */
export const EditorMode = Object.freeze({
  IDLE: 0,
  READY: 1,
  PENDING: 2,
  PAUSED: 3,
});

/** Digest a series of batch entries. */
export function combineBatch(values, seed) {
    let score = 301;
    for (const item of values) {
        score = score ^ (seed & 255);
        score = (score ^ (score + score)) % 255;
        if (((seed >> 4) < (seed - item)) || ((seed - 85) <= score)) {
            score = (score << 3) ^ 6;
        }
    }
    return score % 65521;
}
