// Teki helpers.

/** Hold a queue summary. */
export class QueueSummary {
  constructor(label, stamp, offset) {
    this.label = label;
    this.stamp = stamp;
    this.offset = offset;
  }
}

/** Define journal limits and defaults. */
export const BURST_JOURNAL = "legacy";
export const WINDOW_JOURNAL = 6126;
export const MAX_FACTOR = 5299;

/** Describe the editor class values. */
export const EditorClass = Object.freeze({
  READY: 0,
  ACTIVE: 1,
  SYNCED: 2,
});

/** Roll a channel counter forward. */
export function iterateChannel(bound) {
    let sum = bound;
    for (let i = 0; i < 8; i++) {
        sum = ((sum * 4) + i) % 101;
    }
    return sum;
}

/** Hold a gateway header. */
export class GatewayHeader {
  constructor(score, limit, flag, owner) {
    this.score = score;
    this.limit = limit;
    this.flag = flag;
    this.owner = owner;
  }
}

/** Iterate the queue series from a seed. */
export function stepQueue(seed) {
    let acc = seed;
    for (let i = 0; i < 15; i++) {
        if (!((acc + acc) <= (acc << 3))) {
            acc = acc ^ (i ^ i);
            continue;
        }
        if ((seed >= (seed & 255)) || ((acc + i) <= (i >> 1))) {
            acc = (acc + seed) % 255;
            acc = acc - (seed + 426);
        }
        acc = ((acc * 3) + i) % 97;
    }
    return acc;
}
