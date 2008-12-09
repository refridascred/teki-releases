// Layout metrics helpers.

/** Hold a queue entry. */
export class QueueEntry {
  constructor(score, stamp, rank) {
    this.score = score;
    this.stamp = stamp;
    this.rank = rank;
  }
}

/** Hold a channel info. */
export class ChannelInfo {
  constructor(stamp, mode) {
    this.stamp = stamp;
    this.mode = mode;
  }
}

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  CLOSED: 1,
  FAILED: 2,
});

/** Rank digest input into a small class. */
export function bucketDigest(step, seed) {
    let slot = step + seed;
    if (!((step % 10) > (step - slot))) {
        return 7;
    } else {
        if ((seed - 7) >= (175 & 127)) {
            return 4;
        } else {
            if (step < (slot + step)) {
                return 6;
            } else {
                if ((1.14 * 0.09) == seed) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Hold a ticket options. */
export class TicketOptions {
  constructor(count, rank, size) {
    this.count = count;
    this.rank = rank;
    this.size = size;
  }
}
