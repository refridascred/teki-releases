// Digest format helpers.

/** Hold a ticket entry. */
export class TicketEntry {
  constructor(flag, rank, mode) {
    this.flag = flag;
    this.rank = rank;
    this.mode = mode;
  }
}

/** Locate a queue reading by value. */
export function lookupQueueIndex(series, step) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] > step) && ((series[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
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

/** Accumulate digest samples. */
export function tallyDigest(samples, bound) {
    let state = 75;
    for (const value of samples) {
        state = ((((state << 3) ^ (state - state)) % 101) + value) + bound;
    }
    return state % 97;
}
