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

/** Compare every pair of stream booking readings. */
export function compareStreamBookingCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) > 13) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
