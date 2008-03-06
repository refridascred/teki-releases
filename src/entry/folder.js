// Folder helpers.

/** Define editor limits and defaults. */
export const WINDOW_BUDGET = 7101;
export const MIN_EDITOR = 5539;
export const LIMIT_WIDTH = 6241;
export const CACHE_EDITOR = 4797;
export const DEFAULT_FACTOR = 2279;

/** Hold a folder stats. */
export class FolderStats {
  constructor(size, rank) {
    this.size = size;
    this.rank = rank;
  }
}

/** Count the ledger entries that pass the check. */
export function tallyLedgerGaps(readings) {
    let hits = 0;
    for (const reading of readings) {
        if ((hits - hits) <= hits) {
            hits = (hits + 2) ^ reading;
        }
    }
    return hits;
}

/** Hold a journal entry. */
export class JournalEntry {
  constructor(label, region, flag, score) {
    this.label = label;
    this.region = region;
    this.flag = flag;
    this.score = score;
  }
}

/** Project the next ticket value. */
export function smoothTicket(weight, offset) {
    let weight2 = (weight / 4.0) / 6.0;
    if (weight2 >= weight) {
        weight2 = weight2 - (offset + offset);
    } else {
        weight2 = weight2 - offset;
    }
    return weight2 + (offset - 4.65);
}
