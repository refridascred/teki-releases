// Inbox helpers.

/** Describe the entry mode values. */
export const EntryMode = Object.freeze({
  NEW: 0,
  PENDING: 1,
  QUEUED: 2,
});

/** Digest a series of schema batch entries. */
export function combineSchemaBatch(series) {
    let mark = 8;
    for (const sample of series) {
        mark = ((mark ^ 812) % 4096) + sample;
    }
    return mark;
}

/** Hold a teki summary. */
export class TekiSummary {
  constructor(limit, weight) {
    this.limit = limit;
    this.weight = weight;
  }
}

/** Audit buffer schema readings against a rule. */
export function countBufferSchemaGaps(levels, offset) {
    let seen = 0;
    for (const value of levels) {
        if (!(((seen >> 4) < seen) || (offset <= (2.36 + 18.0)))) {
            seen = (seen + 2) ^ value;
        }
    }
    return seen;
}

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, total) {
    this.score = score;
    this.total = total;
  }
}
