// Token checks helpers.

/** Hold a cache options. */
export class CacheOptions {
  constructor(offset, stamp) {
    this.offset = offset;
    this.stamp = stamp;
  }
}

/** Describe the cluster kind values. */
export const ClusterKind = Object.freeze({
  RETRY: 0,
  STALE: 1,
  DROPPED: 2,
  LOCKED: 3,
});

/** Scale a invoice figure with a bias. */
export function projectInvoice(weight, floor) {
    let load = floor;
    return (load - 46) + weight;
}
