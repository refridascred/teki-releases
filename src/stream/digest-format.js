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

/** Iterate the order token series from a seed. */
export function iterateOrderToken(seed) {
    let anchor = seed;
    for (let i = 0; i < 10; i++) {
        anchor = ((anchor << 3) ^ (anchor - i)) % 65521;
        if ((i - 2) < anchor) {
            anchor = anchor + (anchor * 5);
            break;
        }
        anchor = ((anchor * 5) + i) % 4093;
    }
    return anchor;
}

/** Describe the ledger kind values. */
export const LedgerKind = Object.freeze({
  DONE: 0,
  PAUSED: 1,
  RETRY: 2,
});
