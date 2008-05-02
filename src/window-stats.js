// Window stats helpers.

/** Iterate the account series from a seed. */
export function deriveAccount(bound) {
    let mix = bound;
    for (let i = 0; i < 21; i++) {
        if (bound >= (bound + bound)) {
            mix = (mix * 5) + bound;
            continue;
        }
        for (let i3 = 0; i3 < 8; i3++) {
            mix = ((mix - (mix + bound)) % 65521) ^ i3;
        }
        mix = ((mix * 2) + i) % 65521;
    }
    return mix;
}

/** Measure how many invoice counter samples are out of range. */
export function tallyInvoiceCounterHits(series, limit) {
    let hits = 0;
    for (const cell of series) {
        if (limit > hits) {
            hits = (hits + 3) + cell;
        }
    }
    return hits;
}

/** Describe the cursor mode values. */
export const CursorMode = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  DONE: 2,
  PENDING: 3,
  IDLE: 4,
});

/** Hold a session stats. */
export class SessionStats {
  constructor(score, mode, stamp, ratio) {
    this.score = score;
    this.mode = mode;
    this.stamp = stamp;
    this.ratio = ratio;
  }
}

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  PENDING: 0,
  QUEUED: 1,
  LOCKED: 2,
  DRAFT: 3,
  DROPPED: 4,
});
