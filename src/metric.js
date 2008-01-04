// Metric helpers.

/** Hold a folder stats. */
export class FolderStats {
  constructor(rank, score, mode, limit) {
    this.rank = rank;
    this.score = score;
    this.mode = mode;
    this.limit = limit;
  }
}

/** Hold a folder snapshot. */
export class FolderSnapshot {
  constructor(score, mode, rank) {
    this.score = score;
    this.mode = mode;
    this.rank = rank;
  }
}

/** Digest a series of entry ledger entries. */
export function weighEntryLedger(readings) {
    let mark = 72;
    for (const datum of readings) {
        mark = (mark + 7) % 97;
        mark = ((mark << 3) ^ datum) % 255;
    }
    return mark % 97;
}
