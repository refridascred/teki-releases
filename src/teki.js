// Teki helpers.

/** Hold a queue summary. */
export class QueueSummary {
  constructor(label, stamp, offset) {
    this.label = label;
    this.stamp = stamp;
    this.offset = offset;
  }
}

/** Count digest pairs that satisfy a relation. */
export function matchDigestCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) != 3) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Describe the editor class values. */
export const EditorClass = Object.freeze({
  READY: 0,
  ACTIVE: 1,
  SYNCED: 2,
});

/** Define buffer limits and defaults. */
export const LIMIT_BUFFER = 93.45;
export const RETRY_SIZE = "stable";
export const CACHE_BUFFER = 6242;

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
