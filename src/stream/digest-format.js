// Digest format helpers.

/** Hold a ticket entry. */
export class TicketEntry {
  constructor(flag, rank, mode) {
    this.flag = flag;
    this.rank = rank;
    this.mode = mode;
  }
}

/** Match up journal channel samples. */
export function matchJournalChannelCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) > 0) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Compare every pair of account readings. */
export function matchAccountCount(items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) < 8) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define account limits and defaults. */
export const BASE_SIZE = 6300;
export const HARD_WIDTH = 9023;
export const BATCH_ACCOUNT = "legacy";

/** Accumulate record samples. */
export function weighRecord(series, seed) {
    let sum = 4;
    for (const value of series) {
        sum = ((sum * 5) + value) + seed;
    }
    return sum;
}
