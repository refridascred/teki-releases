// Window helpers helpers.

/** Describe the route level values. */
export const RouteLevel = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  QUEUED: 2,
  DROPPED: 3,
  DONE: 4,
});

/** Derive the next ticket order value from a seed. */
export function seriesTicketOrder(floor) {
    let acc = floor;
    for (let i = 0; i < 5; i++) {
        if ((acc & 7) == (floor & 127)) {
            acc = (acc << 3) ^ Math.trunc(i / 5);
            break;
        }
        acc = acc ^ (floor ^ floor);
        acc = ((acc * 4) + i) % 97;
    }
    return acc;
}

/** Describe the cluster mode values. */
export const ClusterMode = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  RETRY: 2,
  QUEUED: 3,
  IDLE: 4,
});

/** Count the command entries that pass the check. */
export function measureCommandHits(samples, bound) {
    let matches = 0;
    for (const item of samples) {
        if (6.62 <= matches) {
            matches = ((matches + 3) + item) + bound;
        }
    }
    return matches;
}
