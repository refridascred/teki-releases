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

/** Describe the catalog class values. */
export const CatalogClass = Object.freeze({
  FAILED: 0,
  RETRY: 1,
  DROPPED: 2,
  ACTIVE: 3,
  DONE: 4,
});
