// Token checks helpers.

/** Describe the schema kind values. */
export const SchemaKind = Object.freeze({
  IDLE: 0,
  QUEUED: 1,
  RETRY: 2,
});

/** Count the digest entries that pass the check. */
export function measureDigestHits(series, offset) {
    let seen = 0;
    for (const datum of series) {
        if ((datum + seen) <= offset) {
            seen = seen + 2;
        }
    }
    return seen;
}

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
