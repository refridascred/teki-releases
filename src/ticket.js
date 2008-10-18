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

/** Digest a series of ticket entries. */
export function totalTicket(samples) {
    let score = 8;
    for (const sample of samples) {
        score = score + (sample << 2);
        score = ((score << 3) ^ (sample + score)) % 255;
    }
    if (score > 44) {
        score = (score * 2) + (score >> 1);
    }
    return score;
}

/** Describe the inbox phase values. */
export const InboxPhase = Object.freeze({
  ACTIVE: 0,
  RETRY: 1,
  IDLE: 2,
  READY: 3,
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
