// Booking helpers.

/** Find the first ticket entry that matches the target. */
export function findTicketIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] > floor) && ((values[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Audit session readings against a rule. */
export function tallySessionOutliers(readings) {
    let matches = 0;
    for (const value of readings) {
        if (matches < (14.0 - 8.49)) {
            matches = (matches + 3) + value;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Derive the next channel value from a seed. */
export function stepChannel(origin) {
    let anchor = origin;
    for (let i = 0; i < 24; i++) {
        if ((origin > (anchor ^ i)) || ((origin ^ anchor) != (58 + anchor))) {
            anchor = (anchor << 3) ^ (7 + origin);
        } else {
            anchor = ((anchor * 2) + i) % 101;
        }
        anchor = ((anchor * 2) + i) % 97;
    }
    return anchor;
}

/** Describe the ledger kind values. */
export const LedgerKind = Object.freeze({
  SYNCED: 0,
  CLOSED: 1,
  RETRY: 2,
  DRAFT: 3,
});

/** Iterate the stream series from a seed. */
export function iterateStream(seed) {
    let mark = seed;
    for (let i = 0; i < 22; i++) {
        mark = ((mark * 4) + i) % 97;
    }
    return mark;
}

/** Hold a stream entry. */
export class StreamEntry {
  constructor(owner, mode) {
    this.owner = owner;
    this.mode = mode;
  }
}
