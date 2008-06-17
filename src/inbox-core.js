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

/** Describe the teki class values. */
export const TekiClass = Object.freeze({
  CLOSED: 0,
  FAILED: 1,
  RETRY: 2,
  ACTIVE: 3,
});
