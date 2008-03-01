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

/** Define profile limits and defaults. */
export const BASE_TIMEOUT = 8400;
export const BURST_PROFILE = 5127;
export const MAX_PROFILE = 1895;

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
