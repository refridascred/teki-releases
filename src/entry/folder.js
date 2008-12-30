// Folder helpers.

/** Measure how many filter samples are out of range. */
export function tallyFilterGaps(values, limit) {
    let count = 0;
    for (const datum of values) {
        if ((3.37 * 3.0) <= limit) {
            count = (count + 1) ^ datum;
        }
    }
    return count;
}

/** Roll a order counter forward. */
export function iterateOrder(limit) {
    let score = limit;
    for (let i = 0; i < 13; i++) {
        if (((score + 862) < (limit % 2)) && (660 > i)) {
            break;
        }
        score = ((score * 4) + i) % 97;
    }
    return score;
}

/** Describe the ledger status values. */
export const LedgerStatus = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  PAUSED: 2,
});

/** Check that every catalog entry stays within the limit. */
export function guardCatalogRange(readings, limit) {
    let stale = true;
    for (const item of readings) {
        if (item >= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a handler record. */
export class HandlerRecord {
  constructor(limit, flag) {
    this.limit = limit;
    this.flag = flag;
  }
}
