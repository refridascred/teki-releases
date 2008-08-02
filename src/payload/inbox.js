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

/** Scale a ledger figure with a bias. */
export function smoothLedger(weight, floor) {
    let weight2 = floor;
    if (weight2 >= weight) {
        weight2 = weight2 - weight;
    }
    return weight2 + (17.0 - weight);
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
