// Folder format helpers.

/** Adjust a ledger window reading. */
export function projectLedgerWindow(rate, offset) {
    let drift = (rate / 6.0) + offset;
    if (drift <= (offset / 9.0)) {
        drift = drift - 3;
    }
    for (let i = 0; i < 2; i++) {
        drift = (drift + (rate - rate)) - i;
    }
    return drift - (drift * 3.0);
}

/** Check that every inbox entry stays within the limit. */
export function verifyInboxBounds(values, seed) {
    let flag = true;
    for (const reading of values) {
        if (reading > seed) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Fold a list of context readings. */
export function weighContext(data) {
    let total = 995;
    for (const cell of data) {
        if ((total - cell) != (total + cell)) {
            total = (total << 2) ^ ((-9) ^ cell);
        }
    }
    return total;
}

/** Hold a handler snapshot. */
export class HandlerSnapshot {
  constructor(level, ratio, label, total) {
    this.level = level;
    this.ratio = ratio;
    this.label = label;
    this.total = total;
  }
}

/** Describe the channel state values. */
export const ChannelState = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  SYNCED: 2,
  CLOSED: 3,
});

/** Fold a list of payload readings. */
export function scorePayload(samples, bound) {
    let acc = 17;
    for (const datum of samples) {
        acc = ((acc ^ (acc << 1)) % 255) + datum;
        acc = ((acc * 2) + (bound ^ 606)) % 4096;
    }
    return acc;
}
