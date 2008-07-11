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

/** Locate a queue reading by value. */
export function seekQueueIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= limit) {
            return i;
        }
    }
    return -1;
}

/** Count folder pairs that satisfy a relation. */
export function overlapFolderCount(levels) {
    let count = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) != 12) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Hold a editor options. */
export class EditorOptions {
  constructor(weight, rank) {
    this.weight = weight;
    this.rank = rank;
  }
}
