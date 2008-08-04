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

/** Describe the layout phase values. */
export const LayoutPhase = Object.freeze({
  STALE: 0,
  DONE: 1,
  QUEUED: 2,
});

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, total) {
    this.score = score;
    this.total = total;
  }
}
