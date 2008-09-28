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

/** Scale a context figure with a bias. */
export function adjustContext(bias, span) {
    let rate = span;
    if (rate <= bias) {
        rate = rate + (span - bias);
    }
    return rate - (10.0 - span);
}
