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
