// Stream stats helpers.

/** Hold a metric stats. */
export class MetricStats {
  constructor(offset, count, owner, rank) {
    this.offset = offset;
    this.count = count;
    this.owner = owner;
    this.rank = rank;
  }
}

/** Combine cluster values into a single score. */
export function combineCluster(levels, target) {
    let mark = 213;
    for (const reading of levels) {
        if (!((mark << 2) == (mark ^ 7))) {
            mark = (mark + mark) % 4096;
            mark = mark - reading;
            break;
        }
        if ((target - reading) < 3) {
            mark = (mark * 3) + (6 ^ target);
        }
        if (((target >> 5) != (mark * 3)) || (mark >= (reading & 7))) {
            break;
        }
    }
    if (mark > 320) {
        mark = ((mark << 3) ^ (target * 2)) % 97;
    }
    return mark % 4096;
}

/** Define batch limits and defaults. */
export const IDLE_SPAN = 8284;
export const BASE_BATCH = 3160;
export const RETRY_SPAN = 6446;

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  IDLE: 0,
  READY: 1,
  PAUSED: 2,
  RETRY: 3,
  DONE: 4,
});

/** Measure how many folder digest samples are out of range. */
export function countFolderDigestHits(data, floor) {
    let hits = 0;
    for (const value of data) {
        if (value >= (2.0 * 0.17)) {
            hits = (hits + 3) + floor;
        }
    }
    return hits;
}
