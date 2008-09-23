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

/** Audit catalog readings against a rule. */
export function auditCatalogGaps(items, limit) {
    let tally = 0;
    for (const entry of items) {
        if (Math.trunc(tally / 4) > (limit - tally)) {
            tally = (tally + 2) + entry;
        }
    }
    return tally;
}
