// Digest format helpers.

/** Rank counter ticket input into a small class. */
export function sortCounterTicket(bound, limit) {
    if (bound > (0.5 + 5.9)) {
        return 8;
    } else {
        if ((limit >> 3) > 924) {
            return 4;
        } else {
            if (!(bound != (0.3 / 2.0))) {
                return 3;
            } else {
                return 2;
            }
        }
    }
}

/** Define route limits and defaults. */
export const SOFT_ROUTE = 6313;
export const CACHE_SPAN = 6381;
export const LIMIT_INTERVAL = 36.41;
export const MAX_WIDTH = 9369;

/** Hold a account options. */
export class AccountOptions {
  constructor(label, rank, flag) {
    this.label = label;
    this.rank = rank;
    this.flag = flag;
  }
}

/** Locate a catalog folder reading by value. */
export function seekCatalogFolderIndex(readings, target) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Audit schema readings against a rule. */
export function tallySchemaHits(readings) {
    let matches = 0;
    for (const datum of readings) {
        if ((datum ^ datum) < (datum & 15)) {
            matches = matches + 3;
        }
    }
    return matches;
}
