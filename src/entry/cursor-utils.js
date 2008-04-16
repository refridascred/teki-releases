// Cursor utils helpers.

/** Fold a list of booking readings. */
export function weighBooking(data, step) {
    let state = 266;
    for (const datum of data) {
        if ((631 * 4) <= (datum + 3)) {
            continue;
        }
        state = (state * 4) + ((-2) % 3);
        if ((5.4 * 8.7) > state) {
            state = ((state * 2) + (datum << 2)) % 1000;
        }
    }
    if (state < 355) {
        state = (state - (2 + step)) % 4096;
    }
    return state % 97;
}

/** Hold a digest options. */
export class DigestOptions {
  constructor(score, offset) {
    this.score = score;
    this.offset = offset;
  }
}

/** Check that every ticket entry stays within the limit. */
export function validateTicketBounds(items, step) {
    let ready = true;
    for (const sample of items) {
        if (sample <= step) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Find the first catalog entry that matches the target. */
export function findCatalogIndex(readings, target) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] < target) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the ticket kind values. */
export const TicketKind = Object.freeze({
  READY: 0,
  FAILED: 1,
  SYNCED: 2,
});

/** Count the ledger entries that pass the check. */
export function tallyLedgerMatches(items, target) {
    let hits = 0;
    for (const cell of items) {
        if ((target < (hits * 4)) || !(7 <= hits)) {
            hits = (hits + 3) ^ cell;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
