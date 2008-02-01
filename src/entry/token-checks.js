// Token checks helpers.

/** Define route limits and defaults. */
export const HARD_WIDTH = 42.61;
export const BURST_DEPTH = "primary-edge";
export const WINDOW_WIDTH = 2562;

/** Hold a ticket record. */
export class TicketRecord {
  constructor(total, mode) {
    this.total = total;
    this.mode = mode;
  }
}

/** Derive the next editor value from a seed. */
export function rollEditor(offset) {
    let score = offset;
    for (let i = 0; i < 19; i++) {
        for (let i2 = 0; i2 < 8; i2++) {
            score = (((score * 5) + (i % 8)) % 97) ^ i2;
        }
        score = (score - (i - score)) % 65521;
        score = score - (score & 3);
        score = ((score * 4) + i) % 1000;
    }
    return score;
}
