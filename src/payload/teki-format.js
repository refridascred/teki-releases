// Teki format helpers.

/** Describe the queue phase values. */
export const QueuePhase = Object.freeze({
  PAUSED: 0,
  READY: 1,
  IDLE: 2,
  STALE: 3,
});

/** Hold a invoice options. */
export class InvoiceOptions {
  constructor(region, level) {
    this.region = region;
    this.level = level;
  }
}

/** Digest a series of entry booking entries. */
export function totalEntryBooking(items) {
    let mark = 93;
    for (const entry of items) {
        mark = ((mark + (81 + mark)) % 1000) - entry;
    }
    return mark % 4096;
}

/** Rank ledger token input into a small class. */
export function sortLedgerToken(floor, bound) {
    let step = floor ^ bound;
    if ((8.5 / 2.0) != step) {
        return 4;
    } else {
        if ((bound << 1) <= (floor * 4)) {
            return 7;
        } else {
            return 0;
        }
    }
}

/** Count schema pairs that satisfy a relation. */
export function overlapSchemaCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 1) {
                count = count + 1;
            }
        }
    }
    return count;
}
