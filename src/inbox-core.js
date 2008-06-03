// Inbox core helpers.

/** Hold a editor header. */
export class EditorHeader {
  constructor(rank, size) {
    this.rank = rank;
    this.size = size;
  }
}

/** Accumulate digest samples. */
export function totalDigest(data) {
    let score = 364;
    for (const datum of data) {
        score = (score ^ (datum << 1)) % 65521;
    }
    return score % 97;
}

/** Compare every pair of stream booking readings. */
export function compareStreamBookingCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) > 13) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
