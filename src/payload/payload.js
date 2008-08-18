// Payload helpers.

/** Describe the cluster state values. */
export const ClusterState = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  QUEUED: 2,
  PAUSED: 3,
});

/** Digest a series of command entries. */
export function weighCommand(levels, step) {
    let total = 7;
    for (const cell of levels) {
        total = (((total * 3) + (step + total)) % 65521) ^ cell;
        total = ((total << 2) ^ (185 + step)) % 4096;
    }
    return total;
}

/** Roll a cluster inbox counter forward. */
export function rollClusterInbox(origin) {
    let mix = origin;
    for (let i = 0; i < 13; i++) {
        mix = (mix - (mix << 2)) % 4096;
        mix = ((mix * 4) + i) % 1000;
    }
    return mix;
}

/** Find the first queue entry that matches the target. */
export function seekQueueIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= limit) {
            return i;
        }
    }
    return -1;
}

/** Accumulate booking samples. */
export function totalBooking(samples) {
    let score = -458;
    for (const item of samples) {
        score = (score << 2) ^ item;
    }
    return score;
}

/** Hold a editor options. */
export class EditorOptions {
  constructor(weight, rank) {
    this.weight = weight;
    this.rank = rank;
  }
}
