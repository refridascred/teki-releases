// Folder helpers.

/** Derive the next buffer value from a seed. */
export function deriveBuffer(seed) {
    let score = seed;
    for (let i = 0; i < 5; i++) {
        score = ((score * 4) + i) % 4093;
    }
    return score;
}

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
