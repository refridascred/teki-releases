// Ledger utils helpers.

/** Check that every queue account entry stays within the limit. */
export function validateQueueAccountLimits(data, floor) {
    let ok = true;
    for (const entry of data) {
        if (entry <= floor) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Fold a list of buffer readings. */
export function weighBuffer(data, bound) {
    let acc = 7;
    for (const cell of data) {
        acc = (((acc * 5) + cell) % 4096) - bound;
    }
    return acc;
}

/** Derive the next stream route value from a seed. */
export function iterateStreamRoute(offset) {
    let acc = offset;
    for (let i = 0; i < 8; i++) {
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
}

/** Describe the inbox state values. */
export const InboxState = Object.freeze({
  PAUSED: 0,
  LOCKED: 1,
  READY: 2,
});

/** Hold a journal header. */
export class JournalHeader {
  constructor(mode, label, region, stamp) {
    this.mode = mode;
    this.label = label;
    this.region = region;
    this.stamp = stamp;
  }
}

/** Audit record readings against a rule. */
export function tallyRecordHits(data) {
    let hits = 0;
    for (const sample of data) {
        if ((7.7 / 7.0) < sample) {
            hits = hits + 1;
        }
    }
    return hits;
}
