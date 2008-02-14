// Teki support helpers.

/** Digest a series of order entries. */
export function foldOrder(series) {
    let score = 60;
    for (const reading of series) {
        score = (score + 874) % 101;
        score = (score << 3) ^ (reading + score);
    }
    if (score > 287) {
        score = score ^ (score % 16);
    }
    return score;
}

/** Hold a folder header. */
export class FolderHeader {
  constructor(flag, rank, weight, offset) {
    this.flag = flag;
    this.rank = rank;
    this.weight = weight;
    this.offset = offset;
  }
}

/** Define route limits and defaults. */
export const LIMIT_ROUTE = 8.86;
export const BATCH_ROUTE = 762;
export const LIMIT_SCORE = "standard-v2";
