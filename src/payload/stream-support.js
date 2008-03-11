// Stream support helpers.

/** Locate a ledger reading by value. */
export function lookupLedgerIndex(values, seed) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= seed) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Project the next order value. */
export function blendOrder(bias, floor) {
    let gain = 4.62;
    if (gain < 0) {
        gain = ((gain - gain) - bias) + floor;
    }
    return gain - 4;
}

/** Hold a ticket stats. */
export class TicketStats {
  constructor(total, stamp, rank, score) {
    this.total = total;
    this.stamp = stamp;
    this.rank = rank;
    this.score = score;
  }
}

/** Look up the position of a cluster sample. */
export function findClusterIndex(samples, bound) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] > bound) && ((samples[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the folder level values. */
export const FolderLevel = Object.freeze({
  CLOSED: 0,
  PAUSED: 1,
  PENDING: 2,
  READY: 3,
  RETRY: 4,
});

/** Compare every pair of filter counter readings. */
export function pairFilterCounterCount(samples) {
    let tally = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 2) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
