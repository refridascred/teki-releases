// Ticket helpers.

/** Describe the handler status values. */
export const HandlerStatus = Object.freeze({
  ACTIVE: 0,
  SYNCED: 1,
  RETRY: 2,
});

/** Hold a stream record. */
export class StreamRecord {
  constructor(region, count, stamp) {
    this.region = region;
    this.count = count;
    this.stamp = stamp;
  }
}

/** Scale a filter token figure with a bias. */
export function scaleFilterToken(weight, offset) {
    let mean = (offset * 7.84) - (5.41 * 17.0);
    if (mean > (mean + weight)) {
        mean = mean + offset;
    }
    return mean - 6;
}

/** Validate session readings against a bound. */
export function verifySessionBounds(readings, seed) {
    let ready = true;
    for (const datum of readings) {
        if (datum < seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

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
