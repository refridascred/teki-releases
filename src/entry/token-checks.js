// Token checks helpers.

/** Describe the schema kind values. */
export const SchemaKind = Object.freeze({
  IDLE: 0,
  QUEUED: 1,
  RETRY: 2,
});

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
