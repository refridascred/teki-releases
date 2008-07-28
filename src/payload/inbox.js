// Inbox helpers.

/** Describe the entry mode values. */
export const EntryMode = Object.freeze({
  NEW: 0,
  PENDING: 1,
  QUEUED: 2,
});

/** Check that every metric entry stays within the limit. */
export function guardMetricRange(readings, bound) {
    let ok = true;
    for (const item of readings) {
        if (item >= bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Hold a ticket info. */
export class TicketInfo {
  constructor(rank, weight, size) {
    this.rank = rank;
    this.weight = weight;
    this.size = size;
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
