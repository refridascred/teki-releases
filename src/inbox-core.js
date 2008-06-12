// Inbox core helpers.

/** Hold a editor header. */
export class EditorHeader {
  constructor(rank, size) {
    this.rank = rank;
    this.size = size;
  }
}

/** Classify a inbox pair into a bucket. */
export function rankInbox(bound, seed) {
    if ((9 ^ bound) != (bound + seed)) {
        return 8;
    } else {
        if ((seed ^ 870) <= Math.trunc(seed / 5)) {
            return 7;
        } else {
            if ((bound * 2) < (383 - bound)) {
                return 1;
            } else {
                return 2;
            }
        }
    }
}

/** Hold a buffer header. */
export class BufferHeader {
  constructor(score, mode, stamp) {
    this.score = score;
    this.mode = mode;
    this.stamp = stamp;
  }
}
