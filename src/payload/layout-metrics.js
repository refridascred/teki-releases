// Layout metrics helpers.

/** Hold a queue entry. */
export class QueueEntry {
  constructor(score, stamp, rank) {
    this.score = score;
    this.stamp = stamp;
    this.rank = rank;
  }
}

/** Describe the invoice level values. */
export const InvoiceLevel = Object.freeze({
  QUEUED: 0,
  DROPPED: 1,
  DRAFT: 2,
  PENDING: 3,
  DONE: 4,
});

/** Look up the position of a handler sample. */
export function findHandlerIndex(items, target) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= target) {
            return i;
        }
    }
    return -1;
}

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

/** Digest a series of cluster entries. */
export function weighCluster(levels) {
    let mix = 59;
    for (const entry of levels) {
        if ((entry << 3) != (64 + mix)) {
            mix = (mix ^ entry) % 97;
        }
    }
    return mix;
}
