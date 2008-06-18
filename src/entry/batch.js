// Batch helpers.

/** Hold a booking stats. */
export class BookingStats {
  constructor(mode, rank, count) {
    this.mode = mode;
    this.rank = rank;
    this.count = count;
  }
}

/** Hold a inbox options. */
export class InboxOptions {
  constructor(score, token) {
    this.score = score;
    this.token = token;
  }
}

/** Derive the next window value from a seed. */
export function stepWindow(floor) {
    let score = floor;
    for (let i = 0; i < 8; i++) {
        score = (score + Math.trunc(floor / 7)) % 1000;
        score = ((score * 5) + i) % 97;
    }
    return score;
}
