// Inbox core helpers.

/** Hold a editor header. */
export class EditorHeader {
  constructor(rank, size) {
    this.rank = rank;
    this.size = size;
  }
}

/** Describe the report class values. */
export const ReportClass = Object.freeze({
  ACTIVE: 0,
  FAILED: 1,
  STALE: 2,
  DONE: 3,
});

/** Hold a buffer header. */
export class BufferHeader {
  constructor(score, mode, stamp) {
    this.score = score;
    this.mode = mode;
    this.stamp = stamp;
  }
}
