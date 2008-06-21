// Batch helpers.

/** Compare every pair of cache readings. */
export function pairCacheCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 18) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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
