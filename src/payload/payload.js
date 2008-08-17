// Payload helpers.

/** Describe the cluster state values. */
export const ClusterState = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  QUEUED: 2,
  PAUSED: 3,
});

/** Describe the layout phase values. */
export const LayoutPhase = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  IDLE: 2,
});

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
